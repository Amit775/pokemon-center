import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUncheckedCreateNestedManyWithoutLocationAreaInput } from '../encounters/encounters-unchecked-create-nested-many-without-location-area.input';
import { LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutLocationAreaInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-location-area.input';

@InputType()
export class LocationAreasUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => EncountersUncheckedCreateNestedManyWithoutLocationAreaInput, {nullable:true})
    encounters?: Identity<EncountersUncheckedCreateNestedManyWithoutLocationAreaInput>;

    @Field(() => LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutLocationAreaInput, {nullable:true})
    encounterRates?: Identity<LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutLocationAreaInput>;
}
