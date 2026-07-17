import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ContestCombosCountOrderByAggregateInput } from './contest-combos-count-order-by-aggregate.input';
import { ContestCombosAvgOrderByAggregateInput } from './contest-combos-avg-order-by-aggregate.input';
import { ContestCombosMaxOrderByAggregateInput } from './contest-combos-max-order-by-aggregate.input';
import { ContestCombosMinOrderByAggregateInput } from './contest-combos-min-order-by-aggregate.input';
import { ContestCombosSumOrderByAggregateInput } from './contest-combos-sum-order-by-aggregate.input';

@InputType()
export class ContestCombosOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: `${SortOrder}`;

    @Field(() => ContestCombosCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<ContestCombosCountOrderByAggregateInput>;

    @Field(() => ContestCombosAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<ContestCombosAvgOrderByAggregateInput>;

    @Field(() => ContestCombosMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<ContestCombosMaxOrderByAggregateInput>;

    @Field(() => ContestCombosMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<ContestCombosMinOrderByAggregateInput>;

    @Field(() => ContestCombosSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<ContestCombosSumOrderByAggregateInput>;
}
