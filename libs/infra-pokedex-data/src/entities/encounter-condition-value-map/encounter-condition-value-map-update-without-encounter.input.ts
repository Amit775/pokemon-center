import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput } from '../encounter-condition-values/encounter-condition-values-update-one-required-without-condition-value-map-nested.input';

@InputType()
export class EncounterConditionValueMapUpdateWithoutEncounterInput {

    @Field(() => EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput, {nullable:true})
    conditionValue?: EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput;
}
