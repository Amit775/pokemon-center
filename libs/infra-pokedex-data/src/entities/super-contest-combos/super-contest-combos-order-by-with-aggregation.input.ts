import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SuperContestCombosCountOrderByAggregateInput } from './super-contest-combos-count-order-by-aggregate.input';
import { SuperContestCombosAvgOrderByAggregateInput } from './super-contest-combos-avg-order-by-aggregate.input';
import { SuperContestCombosMaxOrderByAggregateInput } from './super-contest-combos-max-order-by-aggregate.input';
import { SuperContestCombosMinOrderByAggregateInput } from './super-contest-combos-min-order-by-aggregate.input';
import { SuperContestCombosSumOrderByAggregateInput } from './super-contest-combos-sum-order-by-aggregate.input';

@InputType()
export class SuperContestCombosOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: `${SortOrder}`;

    @Field(() => SuperContestCombosCountOrderByAggregateInput, {nullable:true})
    _count?: SuperContestCombosCountOrderByAggregateInput;

    @Field(() => SuperContestCombosAvgOrderByAggregateInput, {nullable:true})
    _avg?: SuperContestCombosAvgOrderByAggregateInput;

    @Field(() => SuperContestCombosMaxOrderByAggregateInput, {nullable:true})
    _max?: SuperContestCombosMaxOrderByAggregateInput;

    @Field(() => SuperContestCombosMinOrderByAggregateInput, {nullable:true})
    _min?: SuperContestCombosMinOrderByAggregateInput;

    @Field(() => SuperContestCombosSumOrderByAggregateInput, {nullable:true})
    _sum?: SuperContestCombosSumOrderByAggregateInput;
}
