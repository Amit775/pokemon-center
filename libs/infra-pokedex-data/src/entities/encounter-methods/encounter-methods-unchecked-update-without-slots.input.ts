import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-encounter-method-nested.input';

@InputType()
export class EncounterMethodsUncheckedUpdateWithoutSlotsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesUncheckedUpdateManyWithoutEncounterMethodNestedInput;
}
