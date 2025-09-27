import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: ItemFlagMapCountOrderByAggregateInput;

    @Field(() => ItemFlagMapAvgOrderByAggregateInput, {nullable:true})
    _avg?: ItemFlagMapAvgOrderByAggregateInput;

    @Field(() => ItemFlagMapMaxOrderByAggregateInput, {nullable:true})
    _max?: ItemFlagMapMaxOrderByAggregateInput;

    @Field(() => ItemFlagMapMinOrderByAggregateInput, {nullable:true})
    _min?: ItemFlagMapMinOrderByAggregateInput;

    @Field(() => ItemFlagMapSumOrderByAggregateInput, {nullable:true})
    _sum?: ItemFlagMapSumOrderByAggregateInput;
}
