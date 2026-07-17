import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCreateNestedManyWithoutLocationAreaInput } from '../encounters/encounters-create-nested-many-without-location-area.input';
import { LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-location-area.input';

@InputType()
export class LocationAreasCreateWithoutLocationInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncountersCreateNestedManyWithoutLocationAreaInput, {nullable:true})
    encounters?: Identity<EncountersCreateNestedManyWithoutLocationAreaInput>;

    @Field(() => LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput>;
}
