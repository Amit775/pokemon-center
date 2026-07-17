import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutEncounterRatesInput } from './location-areas-create-or-connect-without-encounter-rates.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class LocationAreasCreateNestedOneWithoutEncounterRatesInput {

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create?: LocationAreasCreateWithoutEncounterRatesInput;

    @Field(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput)
    connectOrCreate?: LocationAreasCreateOrConnectWithoutEncounterRatesInput;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;
}
