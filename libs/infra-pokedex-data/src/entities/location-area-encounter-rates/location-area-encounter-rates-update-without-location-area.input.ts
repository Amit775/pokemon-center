import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-encounter-rates-nested.input';
import { VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from '../versions/versions-update-one-required-without-location-area-encounter-rates-nested.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithoutLocationAreaInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rate?: IntFieldUpdateOperationsInput;

    @Field(() => EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput, {nullable:true})
    encounterMethod?: EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput;

    @Field(() => VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {nullable:true})
    version?: VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput;
}
