import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-update-many-without-condition-value-nested.input';

@InputType()
export class EncounterConditionValuesUncheckedUpdateWithoutConditionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_default?: IntFieldUpdateOperationsInput;

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueNestedInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueNestedInput;
}
