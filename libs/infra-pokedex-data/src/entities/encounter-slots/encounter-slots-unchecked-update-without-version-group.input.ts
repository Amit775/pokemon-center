import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput } from '../encounters/encounters-unchecked-update-many-without-encounter-slot-nested.input';

@InputType()
export class EncounterSlotsUncheckedUpdateWithoutVersionGroupInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    encounter_method_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rarity?: IntFieldUpdateOperationsInput;

    @Field(() => EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput, {nullable:true})
    encounters?: EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput;
}
