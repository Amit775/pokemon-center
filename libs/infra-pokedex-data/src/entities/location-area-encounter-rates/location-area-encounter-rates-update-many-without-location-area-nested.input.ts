import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from './location-area-encounter-rates-create-without-location-area.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput } from './location-area-encounter-rates-create-or-connect-without-location-area.input';
import { LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput } from './location-area-encounter-rates-upsert-with-where-unique-without-location-area.input';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope } from './location-area-encounter-rates-create-many-location-area-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput } from './location-area-encounter-rates-update-with-where-unique-without-location-area.input';
import { LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput } from './location-area-encounter-rates-update-many-with-where-without-location-area.input';
import { LocationAreaEncounterRatesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';

@InputType()
export class LocationAreaEncounterRatesUpdateManyWithoutLocationAreaNestedInput {

    @Field(() => [LocationAreaEncounterRatesCreateWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateWithoutLocationAreaInput)
    create?: Array<LocationAreaEncounterRatesCreateWithoutLocationAreaInput>;

    @Field(() => [LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput)
    connectOrCreate?: Array<LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput>;

    @Field(() => [LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput)
    upsert?: Array<LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutLocationAreaInput>;

    @Field(() => LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope, {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope)
    createMany?: Identity<LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope>;

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

    @Field(() => [LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput)
    update?: Array<LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutLocationAreaInput>;

    @Field(() => [LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput)
    updateMany?: Array<LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesScalarWhereInput)
    deleteMany?: Array<LocationAreaEncounterRatesScalarWhereInput>;
}
