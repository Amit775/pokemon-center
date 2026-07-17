import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from './location-area-encounter-rates-create-without-encounter-method.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput } from './location-area-encounter-rates-create-or-connect-without-encounter-method.input';
import { LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput } from './location-area-encounter-rates-upsert-with-where-unique-without-encounter-method.input';
import { LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope } from './location-area-encounter-rates-create-many-encounter-method-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput } from './location-area-encounter-rates-update-with-where-unique-without-encounter-method.input';
import { LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput } from './location-area-encounter-rates-update-many-with-where-without-encounter-method.input';
import { LocationAreaEncounterRatesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';

@InputType()
export class LocationAreaEncounterRatesUpdateManyWithoutEncounterMethodNestedInput {

    @Field(() => [LocationAreaEncounterRatesCreateWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateWithoutEncounterMethodInput)
    create?: Array<LocationAreaEncounterRatesCreateWithoutEncounterMethodInput>;

    @Field(() => [LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput)
    connectOrCreate?: Array<LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput>;

    @Field(() => [LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput)
    upsert?: Array<LocationAreaEncounterRatesUpsertWithWhereUniqueWithoutEncounterMethodInput>;

    @Field(() => LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope, {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope)
    createMany?: LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope;

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

    @Field(() => [LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput)
    update?: Array<LocationAreaEncounterRatesUpdateWithWhereUniqueWithoutEncounterMethodInput>;

    @Field(() => [LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput)
    updateMany?: Array<LocationAreaEncounterRatesUpdateManyWithWhereWithoutEncounterMethodInput>;

    @Field(() => [LocationAreaEncounterRatesScalarWhereInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesScalarWhereInput)
    deleteMany?: Array<LocationAreaEncounterRatesScalarWhereInput>;
}
