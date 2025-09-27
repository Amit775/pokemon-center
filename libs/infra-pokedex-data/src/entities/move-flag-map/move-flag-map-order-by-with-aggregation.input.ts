import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoveFlagMapCountOrderByAggregateInput } from './move-flag-map-count-order-by-aggregate.input';
import { MoveFlagMapAvgOrderByAggregateInput } from './move-flag-map-avg-order-by-aggregate.input';
import { MoveFlagMapMaxOrderByAggregateInput } from './move-flag-map-max-order-by-aggregate.input';
import { MoveFlagMapMinOrderByAggregateInput } from './move-flag-map-min-order-by-aggregate.input';
import { MoveFlagMapSumOrderByAggregateInput } from './move-flag-map-sum-order-by-aggregate.input';

@InputType()
export class MoveFlagMapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: `${SortOrder}`;

    @Field(() => MoveFlagMapCountOrderByAggregateInput, {nullable:true})
    _count?: MoveFlagMapCountOrderByAggregateInput;

    @Field(() => MoveFlagMapAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoveFlagMapAvgOrderByAggregateInput;

    @Field(() => MoveFlagMapMaxOrderByAggregateInput, {nullable:true})
    _max?: MoveFlagMapMaxOrderByAggregateInput;

    @Field(() => MoveFlagMapMinOrderByAggregateInput, {nullable:true})
    _min?: MoveFlagMapMinOrderByAggregateInput;

    @Field(() => MoveFlagMapSumOrderByAggregateInput, {nullable:true})
    _sum?: MoveFlagMapSumOrderByAggregateInput;
}
