import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterMethodsCreateNestedOneWithoutEncounterRatesInput } from '../encounter-methods/encounter-methods-create-nested-one-without-encounter-rates.input';
import { VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput } from '../versions/versions-create-nested-one-without-location-area-encounter-rates.input';

@InputType()
export class LocationAreaEncounterRatesCreateWithoutLocationAreaInput {

    @Field(() => Int, {nullable:false})
    rate!: number;

    @Field(() => EncounterMethodsCreateNestedOneWithoutEncounterRatesInput, {nullable:false})
    encounterMethod!: EncounterMethodsCreateNestedOneWithoutEncounterRatesInput;

    @Field(() => VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput, {nullable:false})
    version!: VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput;
}
