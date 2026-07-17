import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedOneWithoutGameIndicesInput } from '../items/items-create-nested-one-without-game-indices.input';
import { GenerationsCreateNestedOneWithoutItemGameIndicesInput } from '../generations/generations-create-nested-one-without-item-game-indices.input';

@InputType()
export class ItemGameIndicesCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => ItemsCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    item!: Identity<ItemsCreateNestedOneWithoutGameIndicesInput>;

    @Field(() => GenerationsCreateNestedOneWithoutItemGameIndicesInput, {nullable:false})
    generation!: Identity<GenerationsCreateNestedOneWithoutItemGameIndicesInput>;
}
