import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class EncounterConditionValueMapUncheckedUpdateWithoutEncounterInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    encounter_condition_value_id?: IntFieldUpdateOperationsInput;
}
