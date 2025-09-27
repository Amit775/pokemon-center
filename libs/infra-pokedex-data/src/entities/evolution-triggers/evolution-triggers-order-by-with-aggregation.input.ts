import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EvolutionTriggersCountOrderByAggregateInput } from './evolution-triggers-count-order-by-aggregate.input';
import { EvolutionTriggersAvgOrderByAggregateInput } from './evolution-triggers-avg-order-by-aggregate.input';
import { EvolutionTriggersMaxOrderByAggregateInput } from './evolution-triggers-max-order-by-aggregate.input';
import { EvolutionTriggersMinOrderByAggregateInput } from './evolution-triggers-min-order-by-aggregate.input';
import { EvolutionTriggersSumOrderByAggregateInput } from './evolution-triggers-sum-order-by-aggregate.input';

@InputType()
export class EvolutionTriggersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => EvolutionTriggersCountOrderByAggregateInput, {nullable:true})
    _count?: EvolutionTriggersCountOrderByAggregateInput;

    @Field(() => EvolutionTriggersAvgOrderByAggregateInput, {nullable:true})
    _avg?: EvolutionTriggersAvgOrderByAggregateInput;

    @Field(() => EvolutionTriggersMaxOrderByAggregateInput, {nullable:true})
    _max?: EvolutionTriggersMaxOrderByAggregateInput;

    @Field(() => EvolutionTriggersMinOrderByAggregateInput, {nullable:true})
    _min?: EvolutionTriggersMinOrderByAggregateInput;

    @Field(() => EvolutionTriggersSumOrderByAggregateInput, {nullable:true})
    _sum?: EvolutionTriggersSumOrderByAggregateInput;
}
