import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const CHATWOOT_CONTACT_ID_ON_PERSON_ID =
  '15233a9e-eafb-45f9-9d30-ea2bc57600a8';

export default defineField({
  universalIdentifier: CHATWOOT_CONTACT_ID_ON_PERSON_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.TEXT,
  name: 'chatwootContactId',
  label: 'Chatwoot Contact ID',
  description: 'Stable customer-care identity used for idempotent AutoFlow sync',
  icon: 'IconMessages',
  isNullable: true,
  isUnique: true,
});
