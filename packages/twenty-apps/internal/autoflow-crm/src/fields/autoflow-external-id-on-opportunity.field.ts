import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const AUTOFLOW_EXTERNAL_ID_ON_OPPORTUNITY_ID =
  '64a8aebc-2d47-4c48-a552-236392c72458';

export default defineField({
  universalIdentifier: AUTOFLOW_EXTERNAL_ID_ON_OPPORTUNITY_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.TEXT,
  name: 'autoflowExternalId',
  label: 'AutoFlow External ID',
  description: 'Stable workflow identity used to update an opportunity without duplicates',
  icon: 'IconRoute',
  isNullable: true,
  isUnique: true,
});
