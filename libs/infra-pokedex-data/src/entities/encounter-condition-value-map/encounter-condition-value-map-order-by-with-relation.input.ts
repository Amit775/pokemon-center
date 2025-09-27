import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncountersOrderByWithRelationInput } from '../encounters/encounters-order-by-with-relation.input';
import { EncounterConditionValuesOrderByWithRelationInput } from '../encounter-condition-values/encounter-condition-values-order-by-with-relation.input';

@InputType()
export class EncounterConditionValueMapOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: `${SortOrder}`;

    @Field(() => EncountersOrderByWithRelationInput, {nullable:true})
    encounter?: EncountersOrderByWithRelationInput;

    @Field(() => EncounterConditionValuesOrderByWithRelationInput, {nullable:true})
    conditionValue?: EncounterConditionValuesOrderByWithRelationInput;
}
