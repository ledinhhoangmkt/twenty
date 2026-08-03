import { defineObject, FieldType } from 'twenty-sdk/define';

export const BRAND_UNIVERSAL_IDENTIFIER =
  '52d88bcb-aa83-4c95-b556-b864816f0b75';
export const BRAND_NAME_FIELD_ID =
  '127d7c9c-7e16-49dd-a397-b6cec843af01';
export const BRAND_STATUS_FIELD_ID =
  '556840ed-1f17-4725-a43d-dfd5217a9f84';

export default defineObject({
  universalIdentifier: BRAND_UNIVERSAL_IDENTIFIER,
  nameSingular: 'brand',
  namePlural: 'brands',
  labelSingular: 'Brand',
  labelPlural: 'Brands',
  description: 'A customer brand with isolated pipeline and channel context',
  icon: 'IconTags',
  labelIdentifierFieldMetadataUniversalIdentifier: BRAND_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: BRAND_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: '8a5120a3-58fc-43cf-bffb-b92b037b38a8',
      type: FieldType.TEXT,
      name: 'autoflowBrandId',
      label: 'AutoFlow Brand ID',
      description: 'Immutable mapping key from the AutoFlow control plane',
      icon: 'IconKey',
      isNullable: true,
    },
    {
      universalIdentifier: '18173709-e81b-4b1d-a4c7-af0ae832951b',
      type: FieldType.TEXT,
      name: 'industry',
      label: 'Industry',
      icon: 'IconBuilding',
      isNullable: true,
    },
    {
      universalIdentifier: BRAND_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: "'ACTIVE'",
      options: [
        { id: 'da3a4137-36d2-4acb-a263-89f6d2e2cd0c', value: 'ACTIVE', label: 'Active', position: 0, color: 'green' },
        { id: '3cb41384-058b-415b-b650-1a1e42059c50', value: 'PAUSED', label: 'Paused', position: 1, color: 'orange' },
        { id: '1cf6290e-754b-4551-9f1a-c78b479ac6bd', value: 'ARCHIVED', label: 'Archived', position: 2, color: 'gray' },
      ],
    },
  ],
});
