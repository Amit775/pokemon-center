import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesUpdateWithoutVersionInput } from './location-area-encounter-rates-update-without-version.input';

@InputType()
export class LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesUpdateWithoutVersionInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateWithoutVersionInput)
    data!: Identity<LocationAreaEncounterRatesUpdateWithoutVersionInput>;
}
