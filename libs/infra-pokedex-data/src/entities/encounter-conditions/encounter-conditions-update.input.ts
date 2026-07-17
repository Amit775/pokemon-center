import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EncounterConditionValuesUpdateManyWithoutConditionNestedInput } from '../encounter-condition-values/encounter-condition-values-update-many-without-condition-nested.input';

@InputType()
export class EncounterConditionsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => EncounterConditionValuesUpdateManyWithoutConditionNestedInput, {nullable:true})
    values?: EncounterConditionValuesUpdateManyWithoutConditionNestedInput;
}
