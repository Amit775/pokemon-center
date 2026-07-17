import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateWithoutVersionInput } from './location-area-encounter-rates-create-without-version.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput } from './location-area-encounter-rates-create-or-connect-without-version.input';
import { LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput } from './location-area-encounter-rates-upsert-with-where-unique-without-version.input';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesCreateManyVersionInputEnvelope } from './location-area-encounter-rates-create-many-version-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput } from './location-area-encounter-rates-update-with-where-unique-without-version.input';
import { LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput } from './location-area-encounter-rates-update-many-with-where-without-version.input';
import { LocationAreaEncounterRatesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';

@InputType()
export class LocationAreaEncounterRatesUpdateManyWithoutVersionNestedInput {

    @Field(() => [LocationAreaEncounterRatesCreateWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateWithoutVersionInput)
    create?: Array<LocationAreaEncounterRatesCreateWithoutVersionInput>;

    @Field(() => [LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<LocationAreaEncounterRatesCreateOrConnectWithoutVersionInput>;

    @Field(() => [LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput)
    upsert?: Array<LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutVersionInput>;

    @Field(() => LocationAreaEncounterRatesCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateManyVersionInputEnvelope)
    createMany?: Identity<LocationAreaEncounterRatesCreateManyVersionInputEnvelope>;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;

    @Field(() => [LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput)
    update?: Array<LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutVersionInput>;

    @Field(() => [LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput)
    updateMany?: Array<LocationAreaEncounterRatesUpdateManyWithWhereWithoutVersionInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesScalarWhereInput)
    deleteMany?: Array<LocationAreaEncounterRatesScalarWhereInput>;
}
