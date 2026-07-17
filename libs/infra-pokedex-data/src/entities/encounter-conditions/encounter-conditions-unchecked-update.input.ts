import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EncounterConditionValuesUncheckedUpdateManyWithoutConditionNestedInput } from '../encounter-condition-values/encounter-condition-values-unchecked-update-many-without-condition-nested.input';

@InputType()
export class EncounterConditionsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => EncounterConditionValuesUncheckedUpdateManyWithoutConditionNestedInput, {nullable:true})
    values?: EncounterConditionValuesUncheckedUpdateManyWithoutConditionNestedInput;
}
