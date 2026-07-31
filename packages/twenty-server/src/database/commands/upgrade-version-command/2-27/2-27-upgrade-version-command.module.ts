import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkspaceIteratorModule } from 'src/database/commands/command-runners/workspace-iterator.module';
import { BackfillMissingStandardSkillsCommand } from 'src/database/commands/upgrade-version-command/2-27/2-27-workspace-command-1785499350000-backfill-standard-skills.command';
import { ReconcileRecordPageUniversalIdentifierCommand } from 'src/database/commands/upgrade-version-command/2-27/2-27-workspace-command-1785504604000-reconcile-record-page-universal-identifier.command';
import { BackfillApplicationRecordPageCommand } from 'src/database/commands/upgrade-version-command/2-27/2-27-workspace-command-1785504605000-backfill-application-record-page.command';
import { ApplicationModule } from 'src/engine/core-modules/application/application.module';
import { ViewEntity } from 'src/engine/metadata-modules/view/entities/view.entity';
import { WorkspaceCacheModule } from 'src/engine/workspace-cache/workspace-cache.module';
import { WorkspaceMigrationRunnerModule } from 'src/engine/workspace-manager/workspace-migration/workspace-migration-runner/workspace-migration-runner.module';
import { WorkspaceMigrationModule } from 'src/engine/workspace-manager/workspace-migration/workspace-migration.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ViewEntity]),
    ApplicationModule,
    WorkspaceCacheModule,
    WorkspaceIteratorModule,
    WorkspaceMigrationModule,
    WorkspaceMigrationRunnerModule,
  ],
  providers: [
    BackfillMissingStandardSkillsCommand,
    ReconcileRecordPageUniversalIdentifierCommand,
    BackfillApplicationRecordPageCommand,
  ],
})
export class V2_27_UpgradeVersionCommandModule {}
