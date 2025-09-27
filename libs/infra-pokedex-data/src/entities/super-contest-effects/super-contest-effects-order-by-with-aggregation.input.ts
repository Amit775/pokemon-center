import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    _count?: SuperContestEffectsCountOrderByAggregateInput;

    @Field(() => SuperContestEffectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: SuperContestEffectsAvgOrderByAggregateInput;

    @Field(() => SuperContestEffectsMaxOrderByAggregateInput, {nullable:true})
    _max?: SuperContestEffectsMaxOrderByAggregateInput;

    @Field(() => SuperContestEffectsMinOrderByAggregateInput, {nullable:true})
    _min?: SuperContestEffectsMinOrderByAggregateInput;

    @Field(() => SuperContestEffectsSumOrderByAggregateInput, {nullable:true})
    _sum?: SuperContestEffectsSumOrderByAggregateInput;
}
