import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    baby_trigger_item_id?: SortOrderInput;

    @Field(() => EvolutionChainsCountOrderByAggregateInput, {nullable:true})
    _count?: EvolutionChainsCountOrderByAggregateInput;

    @Field(() => EvolutionChainsAvgOrderByAggregateInput, {nullable:true})
    _avg?: EvolutionChainsAvgOrderByAggregateInput;

    @Field(() => EvolutionChainsMaxOrderByAggregateInput, {nullable:true})
    _max?: EvolutionChainsMaxOrderByAggregateInput;

    @Field(() => EvolutionChainsMinOrderByAggregateInput, {nullable:true})
    _min?: EvolutionChainsMinOrderByAggregateInput;

    @Field(() => EvolutionChainsSumOrderByAggregateInput, {nullable:true})
    _sum?: EvolutionChainsSumOrderByAggregateInput;
}
