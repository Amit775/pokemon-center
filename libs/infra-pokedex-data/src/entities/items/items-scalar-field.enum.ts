import { registerEnumType } from '@nestjs/graphql';

export enum ItemsScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    category_id = "category_id",
    cost = "cost",
    fling_power = "fling_power",
    fling_effect_id = "fling_effect_id"
}


registerEnumType(ItemsScalarFieldEnum, { name: 'ItemsScalarFieldEnum', description: undefined })
