import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUncheckedUpdateWithoutEncounterRatesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    slots?: EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput;
}
