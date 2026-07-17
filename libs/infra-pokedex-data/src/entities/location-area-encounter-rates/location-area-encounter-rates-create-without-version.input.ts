import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasCreateNestedOneWithoutEncounterRatesInput } from '../location-areas/location-areas-create-nested-one-without-encounter-rates.input';
import { EncounterMethodsCreateNestedOneWithoutEncounterRatesInput } from '../encounter-methods/encounter-methods-create-nested-one-without-encounter-rates.input';

@InputType()
export class LocationAreaEncounterRatesCreateWithoutVersionInput {

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => LocationAreasCreateNestedOneWithoutEncounterRatesInput, {nullable:false})
    locationArea!: LocationAreasCreateNestedOneWithoutEncounterRatesInput;

    @Field(() => EncounterMethodsCreateNestedOneWithoutEncounterRatesInput, {nullable:false})
    encounterMethod!: EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;
}
