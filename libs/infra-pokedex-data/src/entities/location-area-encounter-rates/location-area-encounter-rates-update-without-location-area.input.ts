import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-encounter-rates-nested.input';
import { VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from '../versions/versions-update-one-required-without-location-area-encounter-rates-nested.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithoutLocationAreaInput {

    @Field(() => Int, {nullable:true})
    rate?: number;

    @Field(() => EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput, {nullable:true})
    encounterMethod?: Identity<EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput>;

    @Field(() => VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {nullable:true})
    version?: Identity<VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput>;
}
