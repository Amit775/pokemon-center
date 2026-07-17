import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-location-area-nested.input';

@InputType()
export class LocationAreasUncheckedUpdateWithoutEncountersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    location_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesUncheckedUpdateManyWithoutLocationAreaNestedInput;
}
