import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput } from '../encounters/encounters-update-one-required-without-condition-value-map-nested.input';
import { EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput } from '../encounter-condition-values/encounter-condition-values-update-one-required-without-condition-value-map-nested.input';

@InputType()
export class EncounterConditionValueMapUpdateInput {

    @Field(() => EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput, {nullable:true})
    encounter?: EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput;

    @Field(() => EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput, {nullable:true})
    conditionValue?: EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput;
}
