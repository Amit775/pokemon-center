import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';

@InputType()
export class ItemGameIndicesWhereInput {

    @Field(() => [ItemGameIndicesWhereInput], {nullable:true})
    AND?: Array<ItemGameIndicesWhereInput>;

    @Field(() => [ItemGameIndicesWhereInput], {nullable:true})
    OR?: Array<ItemGameIndicesWhereInput>;

    @Field(() => [ItemGameIndicesWhereInput], {nullable:true})
    NOT?: Array<ItemGameIndicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: ItemsScalarRelationFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;
}
