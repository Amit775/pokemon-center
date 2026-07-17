import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasCreateNestedOneWithoutEncounterRatesInput } from '../location-areas/location-areas-create-nested-one-without-encounter-rates.input';
import { EncounterMethodsCreateNestedOneWithoutEncounterRatesInput } from '../encounter-methods/encounter-methods-create-nested-one-without-encounter-rates.input';
import { VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput } from '../versions/versions-create-nested-one-without-location-area-encounter-rates.input';

@InputType()
export class LocationAreaEncounterRatesCreateInput {

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => LocationAreasCreateNestedOneWithoutEncounterRatesInput, {nullable:false})
    locationArea!: LocationAreasCreateNestedOneWithoutEncounterRatesInput;

    @Field(() => EncounterMethodsCreateNestedOneWithoutEncounterRatesInput, {nullable:false})
    encounterMethod!: EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;

    @Field(() => VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput, {nullable:false})
    version!: VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
}
