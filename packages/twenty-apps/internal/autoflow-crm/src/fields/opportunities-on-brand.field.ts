import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { BRAND_UNIVERSAL_IDENTIFIER } from '../objects/brand.object';
import {
  BRAND_ON_OPPORTUNITY_ID,
  OPPORTUNITIES_ON_BRAND_ID,
} from './brand-on-opportunity.field';

export default defineField({
  universalIdentifier: OPPORTUNITIES_ON_BRAND_ID,
  objectUniversalIdentifier: BRAND_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'opportunities',
  label: 'Opportunities',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: BRAND_ON_OPPORTUNITY_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
