import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from './location-area-encounter-rates-create-without-location-area.input';

@InputType()
export class LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesCreateWithoutLocationAreaInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateWithoutLocationAreaInput)
    create!: LocationAreaEncounterRatesCreateWithoutLocationAreaInput;
}
