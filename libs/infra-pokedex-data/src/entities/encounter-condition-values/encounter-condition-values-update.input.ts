import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput } from '../encounter-conditions/encounter-conditions-update-one-required-without-values-nested.input';
import { EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-update-many-without-condition-value-nested.input';

@InputType()
export class EncounterConditionValuesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_default?: IntFieldUpdateOperationsInput;

    @Field(() => EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput, {nullable:true})
    condition?: EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput;

    @Field(() => EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput;
}
