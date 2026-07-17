import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MoveFlagsCountOrderByAggregateInput } from './move-flags-count-order-by-aggregate.input';
import { MoveFlagsAvgOrderByAggregateInput } from './move-flags-avg-order-by-aggregate.input';
import { MoveFlagsMaxOrderByAggregateInput } from './move-flags-max-order-by-aggregate.input';
import { MoveFlagsMinOrderByAggregateInput } from './move-flags-min-order-by-aggregate.input';
import { MoveFlagsSumOrderByAggregateInput } from './move-flags-sum-order-by-aggregate.input';

@InputType()
export class MoveFlagsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveFlagsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<MoveFlagsCountOrderByAggregateInput>;

    @Field(() => MoveFlagsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<MoveFlagsAvgOrderByAggregateInput>;

    @Field(() => MoveFlagsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<MoveFlagsMaxOrderByAggregateInput>;

    @Field(() => MoveFlagsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<MoveFlagsMinOrderByAggregateInput>;

    @Field(() => MoveFlagsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<MoveFlagsSumOrderByAggregateInput>;
}
