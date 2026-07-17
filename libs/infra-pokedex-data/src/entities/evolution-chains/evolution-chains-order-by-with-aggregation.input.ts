import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EvolutionChainsCountOrderByAggregateInput } from './evolution-chains-count-order-by-aggregate.input';
import { EvolutionChainsAvgOrderByAggregateInput } from './evolution-chains-avg-order-by-aggregate.input';
import { EvolutionChainsMaxOrderByAggregateInput } from './evolution-chains-max-order-by-aggregate.input';
import { EvolutionChainsMinOrderByAggregateInput } from './evolution-chains-min-order-by-aggregate.input';
import { EvolutionChainsSumOrderByAggregateInput } from './evolution-chains-sum-order-by-aggregate.input';

@InputType()
export class EvolutionChainsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    baby_trigger_item_id?: Identity<SortOrderInput>;

    @Field(() => EvolutionChainsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<EvolutionChainsCountOrderByAggregateInput>;

    @Field(() => EvolutionChainsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<EvolutionChainsAvgOrderByAggregateInput>;

    @Field(() => EvolutionChainsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<EvolutionChainsMaxOrderByAggregateInput>;

    @Field(() => EvolutionChainsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<EvolutionChainsMinOrderByAggregateInput>;

    @Field(() => EvolutionChainsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<EvolutionChainsSumOrderByAggregateInput>;
}
