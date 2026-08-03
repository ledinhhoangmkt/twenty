import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const LEAD_SOURCE_ON_PERSON_ID =
  '4c9516f1-92d8-44a0-905d-6ecd0a7f5974';

export default defineField({
  universalIdentifier: LEAD_SOURCE_ON_PERSON_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'leadSource',
  label: 'Lead source',
  icon: 'IconSourceCode',
  isNullable: true,
});
