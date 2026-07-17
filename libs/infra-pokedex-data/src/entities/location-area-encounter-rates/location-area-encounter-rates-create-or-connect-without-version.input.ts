import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateWithoutVersionInput } from './location-area-encounter-rates-create-without-version.input';

@InputType()
export class LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesCreateWithoutVersionInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateWithoutVersionInput)
    create!: LocationAreaEncounterRatesCreateWithoutVersionInput;
}
