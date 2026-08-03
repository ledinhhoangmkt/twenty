import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const LEAD_STAGE_ON_PERSON_ID =
  '414c47da-b9ff-4c76-a53e-31ff5cab15d5';

export default defineField({
  universalIdentifier: LEAD_STAGE_ON_PERSON_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.SELECT,
  name: 'leadStage',
  label: 'Lead stage',
  icon: 'IconProgress',
  isNullable: true,
  options: [
    { id: '10320929-d108-4d29-be30-2c7cfcd0826b', value: 'NEW', label: 'New', position: 0, color: 'gray' },
    { id: '39491941-543b-479e-bed9-fceb4af36b83', value: 'QUALIFIED', label: 'Qualified', position: 1, color: 'blue' },
    { id: '2b010b5c-805b-40ea-b7db-95dec8d79711', value: 'NURTURING', label: 'Nurturing', position: 2, color: 'orange' },
    { id: 'abfa8dca-b168-48f6-ab39-81664183325a', value: 'CUSTOMER', label: 'Customer', position: 3, color: 'green' },
    { id: '77049532-6062-4f40-babe-2b69331ae247', value: 'LOST', label: 'Lost', position: 4, color: 'red' },
  ],
});
