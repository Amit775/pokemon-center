import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCountOrderByAggregateInput } from './encounter-condition-value-map-count-order-by-aggregate.input';
import { EncounterConditionValueMapAvgOrderByAggregateInput } from './encounter-condition-value-map-avg-order-by-aggregate.input';
import { EncounterConditionValueMapMaxOrderByAggregateInput } from './encounter-condition-value-map-max-order-by-aggregate.input';
import { EncounterConditionValueMapMinOrderByAggregateInput } from './encounter-condition-value-map-min-order-by-aggregate.input';
import { EncounterConditionValueMapSumOrderByAggregateInput } from './encounter-condition-value-map-sum-order-by-aggregate.input';

@InputType()
export class EncounterConditionValueMapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: `${SortOrder}`;

    @Field(() => EncounterConditionValueMapCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<EncounterConditionValueMapCountOrderByAggregateInput>;

    @Field(() => EncounterConditionValueMapAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<EncounterConditionValueMapAvgOrderByAggregateInput>;

    @Field(() => EncounterConditionValueMapMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<EncounterConditionValueMapMaxOrderByAggregateInput>;

    @Field(() => EncounterConditionValueMapMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<EncounterConditionValueMapMinOrderByAggregateInput>;

    @Field(() => EncounterConditionValueMapSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<EncounterConditionValueMapSumOrderByAggregateInput>;
}
