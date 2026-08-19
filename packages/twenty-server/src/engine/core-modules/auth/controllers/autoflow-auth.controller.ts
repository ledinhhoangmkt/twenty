import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Response } from 'express';
import { Repository } from 'typeorm';

import { AuthService } from 'src/engine/core-modules/auth/services/auth.service';
import { LoginTokenService } from 'src/engine/core-modules/auth/token/services/login-token.service';
import { UserService } from 'src/engine/core-modules/user/services/user.service';
import { AuthProviderEnum } from 'src/engine/core-modules/workspace/types/workspace.type';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { NoPermissionGuard } from 'src/engine/guards/no-permission.guard';
import { PublicEndpointGuard } from 'src/engine/guards/public-endpoint.guard';

type RedeemedIdentity = {
  subject: string;
  email: string;
  customerId: string;
  externalTenantId: string;
  externalUserId?: string;
  selectedBrandId?: string;
  externalBrandId?: string;
};

@Controller('auth/autoflow')
export class AutoFlowAuthController {
  constructor(
    private readonly loginTokenService: LoginTokenService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    @InjectRepository(WorkspaceEntity)
    private readonly workspaceRepository: Repository<WorkspaceEntity>,
  ) {}

  @Get('callback')
  @UseGuards(PublicEndpointGuard, NoPermissionGuard)
  async callback(@Query('code') code: string, @Res() response: Response) {
    const publicUrl = process.env.SERVER_URL ?? 'https://crm.ledinhhoang.com';
    const callbackUrl =
      process.env.AUTOFLOW_SSO_CALLBACK_URL ??
      `${publicUrl.replace(/\/$/, '')}/auth/autoflow/callback`;

    try {
      if (!code || !process.env.AUTOFLOW_SSO_URL || !process.env.AUTOFLOW_SSO_CLIENT_SECRET) {
        throw new Error('AutoFlow SSO is not configured');
      }
      const redeemResponse = await fetch(`${process.env.AUTOFLOW_SSO_URL.replace(/\/$/, '')}/api/auth/sso/redeem`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-autoflow-sso-secret': process.env.AUTOFLOW_SSO_CLIENT_SECRET,
        },
        body: JSON.stringify({ code, audience: 'twenty', redirectUri: callbackUrl }),
      });
      if (!redeemResponse.ok) throw new Error('AutoFlow code redemption failed');
      const identity = (await redeemResponse.json()) as RedeemedIdentity;
      const workspace = await this.workspaceRepository.findOneBy({ id: identity.externalTenantId });
      let user = await this.userService.findUserByEmailWithWorkspaces(identity.email.toLowerCase());
      if (!workspace || (identity.externalUserId && identity.externalUserId !== user?.id)) {
        throw new Error('Mapped CRM user or workspace not found');
      }
      if (!user?.userWorkspaces.some((membership) => membership.workspaceId === workspace.id)) {
        const { userData } = this.authService.formatUserDataPayload(
          { email: identity.email },
          user,
        );
        ({ user } = await this.authService.signInUp({
          userData,
          workspace,
          authParams: { provider: AuthProviderEnum.SSO },
        }));
      }
      if (!identity.externalUserId) await this.linkIdentity(identity, user.id, user.email);
      const loginToken = await this.loginTokenService.generateLoginToken(
        user.email,
        workspace.id,
        AuthProviderEnum.SSO,
      );
      const returnToPath = identity.externalBrandId
        ? `/object/brand/${encodeURIComponent(identity.externalBrandId)}`
        : undefined;
      return response.redirect(this.authService.computeRedirectURI({
        loginToken: loginToken.token,
        workspace,
        returnToPath,
      }));
    } catch {
      return response.redirect(`${publicUrl.replace(/\/$/, '')}/signin?error=autoflow_sso_failed`);
    }
  }

  private async linkIdentity(
    identity: RedeemedIdentity,
    externalUserId: string,
    email: string,
  ) {
    const linkResponse = await fetch(
      `${process.env.AUTOFLOW_SSO_URL?.replace(/\/$/, '')}/api/auth/sso/link`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-autoflow-sso-secret': process.env.AUTOFLOW_SSO_CLIENT_SECRET ?? '',
        },
        body: JSON.stringify({
          audience: 'twenty',
          subject: identity.subject,
          customerId: identity.customerId,
          externalUserId,
          email,
        }),
      },
    );
    if (!linkResponse.ok) throw new Error('AutoFlow user link failed');
  }
}
