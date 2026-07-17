import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ItemFlagMapCountOrderByAggregateInput } from './item-flag-map-count-order-by-aggregate.input';
import { ItemFlagMapAvgOrderByAggregateInput } from './item-flag-map-avg-order-by-aggregate.input';
import { ItemFlagMapMaxOrderByAggregateInput } from './item-flag-map-max-order-by-aggregate.input';
import { ItemFlagMapMinOrderByAggregateInput } from './item-flag-map-min-order-by-aggregate.input';
import { ItemFlagMapSumOrderByAggregateInput } from './item-flag-map-sum-order-by-aggregate.input';

@InputType()
export class ItemFlagMapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_flag_id?: `${SortOrder}`;

    @Field(() => ItemFlagMapCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ItemFlagMapCountOrderByAggregateInput>;

    @Field(() => ItemFlagMapAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ItemFlagMapAvgOrderByAggregateInput>;

    @Field(() => ItemFlagMapMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ItemFlagMapMaxOrderByAggregateInput>;

    @Field(() => ItemFlagMapMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ItemFlagMapMinOrderByAggregateInput>;

    @Field(() => ItemFlagMapSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ItemFlagMapSumOrderByAggregateInput>;
}
