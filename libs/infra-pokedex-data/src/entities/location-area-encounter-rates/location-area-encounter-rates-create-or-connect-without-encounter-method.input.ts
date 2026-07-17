import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from './location-area-encounter-rates-create-without-encounter-method.input';

@InputType()
export class LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesCreateWithoutEncounterMethodInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateWithoutEncounterMethodInput)
    create!: LocationAreaEncounterRatesCreateWithoutEncounterMethodInput;
}
