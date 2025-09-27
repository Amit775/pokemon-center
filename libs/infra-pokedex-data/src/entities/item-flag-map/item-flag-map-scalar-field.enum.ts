import { registerEnumType } from '@nestjs/graphql';

export enum ItemFlagMapScalarFieldEnum {
    item_id = "item_id",
    item_flag_id = "item_flag_id"
}


registerEnumType(ItemFlagMapScalarFieldEnum, { name: 'ItemFlagMapScalarFieldEnum', description: undefined })
