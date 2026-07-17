import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';

@InputType()
export class ItemGameIndicesListRelationFilter {

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    every?: Identity<ItemGameIndicesWhereInput>;

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    some?: Identity<ItemGameIndicesWhereInput>;

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    none?: Identity<ItemGameIndicesWhereInput>;
}
