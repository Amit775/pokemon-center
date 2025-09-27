import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ContestEffectsCountOrderByAggregateInput } from './contest-effects-count-order-by-aggregate.input';
import { ContestEffectsAvgOrderByAggregateInput } from './contest-effects-avg-order-by-aggregate.input';
import { ContestEffectsMaxOrderByAggregateInput } from './contest-effects-max-order-by-aggregate.input';
import { ContestEffectsMinOrderByAggregateInput } from './contest-effects-min-order-by-aggregate.input';
import { ContestEffectsSumOrderByAggregateInput } from './contest-effects-sum-order-by-aggregate.input';

@InputType()
export class ContestEffectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    appeal?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    jam?: `${SortOrder}`;

    @Field(() => ContestEffectsCountOrderByAggregateInput, {nullable:true})
    _count?: ContestEffectsCountOrderByAggregateInput;

    @Field(() => ContestEffectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContestEffectsAvgOrderByAggregateInput;

    @Field(() => ContestEffectsMaxOrderByAggregateInput, {nullable:true})
    _max?: ContestEffectsMaxOrderByAggregateInput;

    @Field(() => ContestEffectsMinOrderByAggregateInput, {nullable:true})
    _min?: ContestEffectsMinOrderByAggregateInput;

    @Field(() => ContestEffectsSumOrderByAggregateInput, {nullable:true})
    _sum?: ContestEffectsSumOrderByAggregateInput;
}
