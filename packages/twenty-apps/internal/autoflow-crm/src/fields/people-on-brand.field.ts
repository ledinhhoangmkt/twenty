import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { BRAND_UNIVERSAL_IDENTIFIER } from '../objects/brand.object';
import { BRAND_ON_PERSON_ID, PEOPLE_ON_BRAND_ID } from './brand-on-person.field';

export default defineField({
  universalIdentifier: PEOPLE_ON_BRAND_ID,
  objectUniversalIdentifier: BRAND_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'people',
  label: 'People',
  icon: 'IconUsers',
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: BRAND_ON_PERSON_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
