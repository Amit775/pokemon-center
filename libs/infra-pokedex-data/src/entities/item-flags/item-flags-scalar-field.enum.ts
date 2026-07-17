import { registerEnumType } from '@nestjs/graphql';

export enum ItemFlagsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(ItemFlagsScalarFieldEnum, { name: 'ItemFlagsScalarFieldEnum', description: undefined })
