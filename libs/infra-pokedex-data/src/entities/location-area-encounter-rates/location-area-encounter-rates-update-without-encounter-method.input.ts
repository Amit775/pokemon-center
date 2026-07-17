import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput } from '../location-areas/location-areas-update-one-required-without-encounter-rates-nested.input';
import { VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput } from '../versions/versions-update-one-required-without-location-area-encounter-rates-nested.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput {

    @Field(() => Int, {nullable:true})
    rate?: number;

    @Field(() => LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput, {nullable:true})
    locationArea?: Identity<LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput>;

    @Field(() => VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput, {nullable:true})
    version?: Identity<VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput>;
}
