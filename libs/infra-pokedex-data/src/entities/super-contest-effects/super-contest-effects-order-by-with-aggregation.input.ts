import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SuperContestEffectsCountOrderByAggregateInput } from './super-contest-effects-count-order-by-aggregate.input';
import { SuperContestEffectsAvgOrderByAggregateInput } from './super-contest-effects-avg-order-by-aggregate.input';
import { SuperContestEffectsMaxOrderByAggregateInput } from './super-contest-effects-max-order-by-aggregate.input';
import { SuperContestEffectsMinOrderByAggregateInput } from './super-contest-effects-min-order-by-aggregate.input';
import { SuperContestEffectsSumOrderByAggregateInput } from './super-contest-effects-sum-order-by-aggregate.input';

@InputType()
export class SuperContestEffectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    appeal?: `${SortOrder}`;

    @Field(() => SuperContestEffectsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<SuperContestEffectsCountOrderByAggregateInput>;

    @Field(() => SuperContestEffectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<SuperContestEffectsAvgOrderByAggregateInput>;

    @Field(() => SuperContestEffectsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<SuperContestEffectsMaxOrderByAggregateInput>;

    @Field(() => SuperContestEffectsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<SuperContestEffectsMinOrderByAggregateInput>;

    @Field(() => SuperContestEffectsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<SuperContestEffectsSumOrderByAggregateInput>;
}
