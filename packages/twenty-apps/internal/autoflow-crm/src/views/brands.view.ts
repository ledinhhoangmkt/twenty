import { defineView, ViewType } from 'twenty-sdk/define';
import {
  BRAND_NAME_FIELD_ID,
  BRAND_STATUS_FIELD_ID,
  BRAND_UNIVERSAL_IDENTIFIER,
} from '../objects/brand.object';

export default defineView({
  universalIdentifier: 'bbefe595-2365-4b0d-950c-82d7fed3861f',
  name: 'Brands',
  objectUniversalIdentifier: BRAND_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTags',
  position: 0,
  fields: [
    { universalIdentifier: '3a7b2273-a967-4dc5-b290-b3429bbef347', fieldMetadataUniversalIdentifier: BRAND_NAME_FIELD_ID, position: 0, isVisible: true, size: 220 },
    { universalIdentifier: '2cef5100-327a-489a-b743-3e386f9044c7', fieldMetadataUniversalIdentifier: BRAND_STATUS_FIELD_ID, position: 1, isVisible: true, size: 140 },
    { universalIdentifier: '6d151336-a9ea-4225-bd67-d10473d7f2d7', fieldMetadataUniversalIdentifier: '18173709-e81b-4b1d-a4c7-af0ae832951b', position: 2, isVisible: true, size: 180 },
  ],
});
