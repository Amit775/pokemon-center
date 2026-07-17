import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateWithoutVersionInput } from './location-area-encounter-rates-create-without-version.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput } from './location-area-encounter-rates-create-or-connect-without-version.input';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesCreateManyVersionInputEnvelope } from './location-area-encounter-rates-create-many-version-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@InputType()
export class LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutVersionInput {

    @Field(() => [LocationAreaEncounterRatesCreateWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateWithoutVersionInput)
    create?: Array<LocationAreaEncounterRatesCreateWithoutVersionInput>;

    @Field(() => [LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput>;

    @Field(() => LocationAreaEncounterRatesCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateManyVersionInputEnvelope)
    createMany?: Identity<LocationAreaEncounterRatesCreateManyVersionInputEnvelope>;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;
}
