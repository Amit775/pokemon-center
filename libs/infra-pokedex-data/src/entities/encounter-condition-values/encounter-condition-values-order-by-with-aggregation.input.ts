import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    _count?: Identity<EncounterConditionValuesCountOrderByAggregateInput>;

    @Field(() => EncounterConditionValuesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<EncounterConditionValuesAvgOrderByAggregateInput>;

    @Field(() => EncounterConditionValuesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<EncounterConditionValuesMaxOrderByAggregateInput>;

    @Field(() => EncounterConditionValuesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<EncounterConditionValuesMinOrderByAggregateInput>;

    @Field(() => EncounterConditionValuesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<EncounterConditionValuesSumOrderByAggregateInput>;
}
