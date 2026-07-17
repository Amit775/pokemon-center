import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MoveTargetsCountOrderByAggregateInput } from './move-targets-count-order-by-aggregate.input';
import { MoveTargetsAvgOrderByAggregateInput } from './move-targets-avg-order-by-aggregate.input';
import { MoveTargetsMaxOrderByAggregateInput } from './move-targets-max-order-by-aggregate.input';
import { MoveTargetsMinOrderByAggregateInput } from './move-targets-min-order-by-aggregate.input';
import { MoveTargetsSumOrderByAggregateInput } from './move-targets-sum-order-by-aggregate.input';

@InputType()
export class MoveTargetsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveTargetsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<MoveTargetsCountOrderByAggregateInput>;

    @Field(() => MoveTargetsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<MoveTargetsAvgOrderByAggregateInput>;

    @Field(() => MoveTargetsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<MoveTargetsMaxOrderByAggregateInput>;

    @Field(() => MoveTargetsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<MoveTargetsMinOrderByAggregateInput>;

    @Field(() => MoveTargetsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<MoveTargetsSumOrderByAggregateInput>;
}
