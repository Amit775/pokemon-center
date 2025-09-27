import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';

@InputType()
export class ItemGameIndicesListRelationFilter {

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    every?: ItemGameIndicesWhereInput;

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    some?: ItemGameIndicesWhereInput;

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    none?: ItemGameIndicesWhereInput;
}
