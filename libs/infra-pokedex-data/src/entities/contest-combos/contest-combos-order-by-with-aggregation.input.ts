import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: ContestCombosCountOrderByAggregateInput;

    @Field(() => ContestCombosAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContestCombosAvgOrderByAggregateInput;

    @Field(() => ContestCombosMaxOrderByAggregateInput, {nullable:true})
    _max?: ContestCombosMaxOrderByAggregateInput;

    @Field(() => ContestCombosMinOrderByAggregateInput, {nullable:true})
    _min?: ContestCombosMinOrderByAggregateInput;

    @Field(() => ContestCombosSumOrderByAggregateInput, {nullable:true})
    _sum?: ContestCombosSumOrderByAggregateInput;
}
