import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateOneRequiredWithoutGameIndicesNestedInput } from '../items/items-update-one-required-without-game-indices-nested.input';
import { GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput } from '../generations/generations-update-one-required-without-item-game-indices-nested.input';

@InputType()
export class ItemGameIndicesUpdateInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => ItemsUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    item?: Identity<ItemsUpdateOneRequiredWithoutGameIndicesNestedInput>;

    @Field(() => GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput>;
}
