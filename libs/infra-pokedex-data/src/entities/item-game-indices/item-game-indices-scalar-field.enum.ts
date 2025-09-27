import { registerEnumType } from '@nestjs/graphql';

export enum ItemGameIndicesScalarFieldEnum {
    item_id = "item_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(ItemGameIndicesScalarFieldEnum, { name: 'ItemGameIndicesScalarFieldEnum', description: undefined })
