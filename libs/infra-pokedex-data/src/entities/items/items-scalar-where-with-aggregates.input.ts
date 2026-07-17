import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ItemsScalarWhereWithAggregatesInput {

    @Field(() => [ItemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cost?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    fling_power?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    fling_effect_id?: Identity<IntWithAggregatesFilter>;
}
