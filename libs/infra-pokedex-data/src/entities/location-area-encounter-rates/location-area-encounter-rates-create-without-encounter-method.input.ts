import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasCreateNestedOneWithoutEncounterRatesInput } from '../location-areas/location-areas-create-nested-one-without-encounter-rates.input';
import { VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput } from '../versions/versions-create-nested-one-without-location-area-encounter-rates.input';

@InputType()
export class LocationAreaEncounterRatesCreateWithoutEncounterMethodInput {

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => LocationAreasCreateNestedOneWithoutEncounterRatesInput, {nullable:false})
    locationArea!: LocationAreasCreateNestedOneWithoutEncounterRatesInput;

    @Field(() => VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput, {nullable:false})
    version!: VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
}
