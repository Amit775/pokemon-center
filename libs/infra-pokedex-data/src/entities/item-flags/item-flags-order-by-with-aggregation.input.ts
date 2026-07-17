import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ItemFlagsCountOrderByAggregateInput } from './item-flags-count-order-by-aggregate.input';
import { ItemFlagsAvgOrderByAggregateInput } from './item-flags-avg-order-by-aggregate.input';
import { ItemFlagsMaxOrderByAggregateInput } from './item-flags-max-order-by-aggregate.input';
import { ItemFlagsMinOrderByAggregateInput } from './item-flags-min-order-by-aggregate.input';
import { ItemFlagsSumOrderByAggregateInput } from './item-flags-sum-order-by-aggregate.input';

@InputType()
export class ItemFlagsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemFlagsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ItemFlagsCountOrderByAggregateInput>;

    @Field(() => ItemFlagsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ItemFlagsAvgOrderByAggregateInput>;

    @Field(() => ItemFlagsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ItemFlagsMaxOrderByAggregateInput>;

    @Field(() => ItemFlagsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ItemFlagsMinOrderByAggregateInput>;

    @Field(() => ItemFlagsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ItemFlagsSumOrderByAggregateInput>;
}
