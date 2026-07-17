import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput } from '../location-areas/location-areas-update-one-required-without-encounter-rates-nested.input';
import { VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from '../versions/versions-update-one-required-without-location-area-encounter-rates-nested.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rate?: IntFieldUpdateOperationsInput;

    @Field(() => LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput, {nullable:true})
    locationArea?: LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput;

    @Field(() => VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {nullable:true})
    version?: VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput;
}
