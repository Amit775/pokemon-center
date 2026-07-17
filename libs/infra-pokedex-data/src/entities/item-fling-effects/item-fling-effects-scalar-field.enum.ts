import { registerEnumType } from '@nestjs/graphql';

export enum ItemFlingEffectsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(ItemFlingEffectsScalarFieldEnum, { name: 'ItemFlingEffectsScalarFieldEnum', description: undefined })
