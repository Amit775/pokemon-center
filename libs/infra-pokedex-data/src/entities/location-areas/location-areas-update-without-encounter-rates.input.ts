import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { LocationsUpdateOneRequiredWithoutAreasNestedInput } from '../locations/locations-update-one-required-without-areas-nested.input';
import { EncountersUpdateManyWithoutLocationAreaNestedInput } from '../encounters/encounters-update-many-without-location-area-nested.input';

@InputType()
export class LocationAreasUpdateWithoutEncounterRatesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => LocationsUpdateOneRequiredWithoutAreasNestedInput, {nullable:true})
    location?: LocationsUpdateOneRequiredWithoutAreasNestedInput;

    @Field(() => EncountersUpdateManyWithoutLocationAreaNestedInput, {nullable:true})
    encounters?: EncountersUpdateManyWithoutLocationAreaNestedInput;
}
