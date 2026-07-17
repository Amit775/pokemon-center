import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EncountersUpdateManyWithoutLocationAreaNestedInput } from '../encounters/encounters-update-many-without-location-area-nested.input';
import { LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-location-area-nested.input';

@InputType()
export class LocationAreasUpdateWithoutLocationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EncountersUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounters?: EncountersUpdateManyWithoutLocationAreaNestedInput;

    @Field(() => LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput;
}
