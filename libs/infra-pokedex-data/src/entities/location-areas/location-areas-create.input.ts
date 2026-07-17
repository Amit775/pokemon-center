import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationsCreateNestedOneWithoutAreasInput } from '../locations/locations-create-nested-one-without-areas.input';
import { EncountersCreateNestedManyWithoutLocationAreaInput } from '../encounters/encounters-create-nested-many-without-location-area.input';
import { LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-location-area.input';

@InputType()
export class LocationAreasCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationsCreateNestedOneWithoutAreasInput, {nullable:false})
    location!: LocationsCreateNestedOneWithoutAreasInput;

    @Field(() => EncountersCreateNestedManyWithoutLocationAreaInput, {nullable:true})
    encounters?: EncountersCreateNestedManyWithoutLocationAreaInput;

    @Field(() => LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput;
}
