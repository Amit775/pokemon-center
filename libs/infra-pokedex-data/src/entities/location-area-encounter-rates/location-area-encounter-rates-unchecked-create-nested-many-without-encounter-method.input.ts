import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateWithoutEncounterMethodInput } from './location-area-encounter-rates-create-without-encounter-method.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput } from './location-area-encounter-rates-create-or-connect-without-encounter-method.input';
import { LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope } from './location-area-encounter-rates-create-many-encounter-method-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@InputType()
export class LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput {

    @Field(() => [LocationAreaEncounterRatesCreateWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateWithoutEncounterMethodInput)
    create?: Array<LocationAreaEncounterRatesCreateWithoutEncounterMethodInput>;

    @Field(() => [LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput)
    connectOrCreate?: Array<LocationAreaEncounterRatesCreateOrConnectWithoutEncounterMethodInput>;

    @Field(() => LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope, {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope)
    createMany?: LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;
}
