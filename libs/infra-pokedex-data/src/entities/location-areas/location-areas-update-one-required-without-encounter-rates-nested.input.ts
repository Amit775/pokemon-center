import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutEncounterRatesInput } from './location-areas-create-or-connect-without-encounter-rates.input';
import { LocationAreasUpsertWithoutEncounterRatesInput } from './location-areas-upsert-without-encounter-rates.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput } from './location-areas-update-to-one-with-where-without-encounter-rates.input';

@InputType()
export class LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput {

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create?: Identity<LocationAreasCreateWithoutEncounterRatesInput>;

    @Field(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput)
    connectOrCreate?: Identity<LocationAreasCreateOrConnectWithoutEncounterRatesInput>;

    @Field(() => LocationAreasUpsertWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasUpsertWithoutEncounterRatesInput)
    upsert?: Identity<LocationAreasUpsertWithoutEncounterRatesInput>;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput)
    update?: Identity<LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput>;
}
