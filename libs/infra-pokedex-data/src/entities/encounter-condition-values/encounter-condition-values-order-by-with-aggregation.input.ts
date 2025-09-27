import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncounterConditionValuesCountOrderByAggregateInput } from './encounter-condition-values-count-order-by-aggregate.input';
import { EncounterConditionValuesAvgOrderByAggregateInput } from './encounter-condition-values-avg-order-by-aggregate.input';
import { EncounterConditionValuesMaxOrderByAggregateInput } from './encounter-condition-values-max-order-by-aggregate.input';
import { EncounterConditionValuesMinOrderByAggregateInput } from './encounter-condition-values-min-order-by-aggregate.input';
import { EncounterConditionValuesSumOrderByAggregateInput } from './encounter-condition-values-sum-order-by-aggregate.input';

@InputType()
export class EncounterConditionValuesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => EncounterConditionValuesCountOrderByAggregateInput, {nullable:true})
    _count?: EncounterConditionValuesCountOrderByAggregateInput;

    @Field(() => EncounterConditionValuesAvgOrderByAggregateInput, {nullable:true})
    _avg?: EncounterConditionValuesAvgOrderByAggregateInput;

    @Field(() => EncounterConditionValuesMaxOrderByAggregateInput, {nullable:true})
    _max?: EncounterConditionValuesMaxOrderByAggregateInput;

    @Field(() => EncounterConditionValuesMinOrderByAggregateInput, {nullable:true})
    _min?: EncounterConditionValuesMinOrderByAggregateInput;

    @Field(() => EncounterConditionValuesSumOrderByAggregateInput, {nullable:true})
    _sum?: EncounterConditionValuesSumOrderByAggregateInput;
}
