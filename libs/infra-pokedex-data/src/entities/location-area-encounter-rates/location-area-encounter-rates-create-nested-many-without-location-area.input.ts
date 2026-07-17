import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateWithoutLocationAreaInput } from './location-area-encounter-rates-create-without-location-area.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput } from './location-area-encounter-rates-create-or-connect-without-location-area.input';
import { LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope } from './location-area-encounter-rates-create-many-location-area-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@InputType()
export class LocationAreaEncounterRatesCreateNestedManyWithoutLocationAreaInput {

    @Field(() => [LocationAreaEncounterRatesCreateWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateWithoutLocationAreaInput)
    create?: Array<LocationAreaEncounterRatesCreateWithoutLocationAreaInput>;

    @Field(() => [LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput)
    connectOrCreate?: Array<LocationAreaEncounterRatesCreateOrConnectWithoutLocationAreaInput>;

    @Field(() => LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope, {nullable:true})
    @Type(() => LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope)
    createMany?: LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope;

    @Field(() => [LocationAreaEncounterRatesWhereUniqueInput], {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>>;
}
