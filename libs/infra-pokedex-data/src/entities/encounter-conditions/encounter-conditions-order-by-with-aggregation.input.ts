import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncounterConditionsCountOrderByAggregateInput } from './encounter-conditions-count-order-by-aggregate.input';
import { EncounterConditionsAvgOrderByAggregateInput } from './encounter-conditions-avg-order-by-aggregate.input';
import { EncounterConditionsMaxOrderByAggregateInput } from './encounter-conditions-max-order-by-aggregate.input';
import { EncounterConditionsMinOrderByAggregateInput } from './encounter-conditions-min-order-by-aggregate.input';
import { EncounterConditionsSumOrderByAggregateInput } from './encounter-conditions-sum-order-by-aggregate.input';

@InputType()
export class EncounterConditionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => EncounterConditionsCountOrderByAggregateInput, {nullable:true})
    _count?: EncounterConditionsCountOrderByAggregateInput;

    @Field(() => EncounterConditionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: EncounterConditionsAvgOrderByAggregateInput;

    @Field(() => EncounterConditionsMaxOrderByAggregateInput, {nullable:true})
    _max?: EncounterConditionsMaxOrderByAggregateInput;

    @Field(() => EncounterConditionsMinOrderByAggregateInput, {nullable:true})
    _min?: EncounterConditionsMinOrderByAggregateInput;

    @Field(() => EncounterConditionsSumOrderByAggregateInput, {nullable:true})
    _sum?: EncounterConditionsSumOrderByAggregateInput;
}
