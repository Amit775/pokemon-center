import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesUpdateWithoutLocationAreaInput } from './location-area-encounter-rates-update-without-location-area.input';
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from './location-area-encounter-rates-create-without-location-area.input';

@InputType()
export class LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesUpdateWithoutLocationAreaInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateWithoutLocationAreaInput)
    update!: Identity<LocationAreaEncounterRatesUpdateWithoutLocationAreaInput>;

    @Field(() => LocationAreaEncounterRatesCreateWithoutLocationAreaInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateWithoutLocationAreaInput)
    create!: Identity<LocationAreaEncounterRatesCreateWithoutLocationAreaInput>;
}
