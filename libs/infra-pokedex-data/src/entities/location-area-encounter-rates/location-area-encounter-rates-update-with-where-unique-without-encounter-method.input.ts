import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput } from './location-area-encounter-rates-update-without-encounter-method.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput)
    data!: LocationAreaEncounterRatesUpdateWithoutEncounterMethodInput;
}
