import { registerEnumType } from '@nestjs/graphql';

export enum ItemPocketsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(ItemPocketsScalarFieldEnum, { name: 'ItemPocketsScalarFieldEnum', description: undefined })
