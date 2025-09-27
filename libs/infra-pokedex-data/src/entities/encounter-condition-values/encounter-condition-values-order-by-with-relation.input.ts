import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncounterConditionsOrderByWithRelationInput } from '../encounter-conditions/encounter-conditions-order-by-with-relation.input';
import { EncounterConditionValueMapOrderByRelationAggregateInput } from '../encounter-condition-value-map/encounter-condition-value-map-order-by-relation-aggregate.input';

@InputType()
export class EncounterConditionValuesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => EncounterConditionsOrderByWithRelationInput, {nullable:true})
    condition?: EncounterConditionsOrderByWithRelationInput;

    @Field(() => EncounterConditionValueMapOrderByRelationAggregateInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapOrderByRelationAggregateInput;
}
