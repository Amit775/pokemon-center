import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput } from '../encounters/encounters-update-one-required-without-condition-value-map-nested.input';

@InputType()
export class EncounterConditionValueMapUpdateWithoutConditionValueInput {

    @Field(() => EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput, {nullable:true})
    encounter?: EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput;
}
