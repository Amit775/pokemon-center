import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutEncounterRatesInput } from './location-areas-create-or-connect-without-encounter-rates.input';
import { LocationAreasUpsertWithoutEncounterRatesInput } from './location-areas-upsert-without-encounter-rates.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput } from './location-areas-update-to-one-with-where-without-encounter-rates.input';

@InputType()
export class LocationAreasUpdateOneRequiredWithoutEncounterRatesNestedInput {

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create?: LocationAreasCreateWithoutEncounterRatesInput;

    @Field(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput)
    connectOrCreate?: LocationAreasCreateOrConnectWithoutEncounterRatesInput;

    @Field(() => LocationAreasUpsertWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasUpsertWithoutEncounterRatesInput)
    upsert?: LocationAreasUpsertWithoutEncounterRatesInput;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput)
    update?: LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput;
}
