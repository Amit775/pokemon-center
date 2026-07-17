import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput } from '../location-areas/location-areas-update-one-required-without-encounter-rates-nested.input';
import { EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-encounter-rates-nested.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithoutVersionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rate?: IntFieldUpdateOperationsInput;

    @Field(() => LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput, {nullable:true})
    locationArea?: LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput;

    @Field(() => EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput, {nullable:true})
    encounterMethod?: EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput;
}
