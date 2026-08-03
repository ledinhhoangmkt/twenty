import {
  defineField,
  FieldType,
  OnDeleteAction,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { BRAND_UNIVERSAL_IDENTIFIER } from '../objects/brand.object';

export const BRAND_ON_PERSON_ID = '2e086e21-f254-44ab-9b53-88c56c83a7aa';
export const PEOPLE_ON_BRAND_ID = '2940a39c-29c4-43c6-8dc6-bdc828025655';

export default defineField({
  universalIdentifier: BRAND_ON_PERSON_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'brand',
  label: 'Brand',
  icon: 'IconTags',
  relationTargetObjectMetadataUniversalIdentifier: BRAND_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PEOPLE_ON_BRAND_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'brandId',
  },
});
