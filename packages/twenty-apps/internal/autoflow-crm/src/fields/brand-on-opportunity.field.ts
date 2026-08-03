import {
  defineField,
  FieldType,
  OnDeleteAction,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { BRAND_UNIVERSAL_IDENTIFIER } from '../objects/brand.object';

export const BRAND_ON_OPPORTUNITY_ID =
  '06781507-9b2c-4e68-8b13-eba0de86f0b2';
export const OPPORTUNITIES_ON_BRAND_ID =
  '76146229-c7bc-4e44-b0d4-c682bf29d5e1';

export default defineField({
  universalIdentifier: BRAND_ON_OPPORTUNITY_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.RELATION,
  name: 'brand',
  label: 'Brand',
  icon: 'IconTags',
  relationTargetObjectMetadataUniversalIdentifier: BRAND_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: OPPORTUNITIES_ON_BRAND_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'brandId',
  },
});
