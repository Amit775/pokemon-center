import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class LocationAreaEncounterRatesUncheckedUpdateManyWithoutVersionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    location_area_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    encounter_method_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rate?: IntFieldUpdateOperationsInput;
}
