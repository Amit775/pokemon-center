import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateOrConnectWithoutEncounterRatesInput } from './location-areas-create-or-connect-without-encounter-rates.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class LocationAreasCreateNestedOneWithoutEncounterRatesInput {

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create?: Identity<LocationAreasCreateWithoutEncounterRatesInput>;

    @Field(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput, {nullable:true})
    @Type(() => LocationAreasCreateOrConnectWithoutEncounterRatesInput)
    connectOrCreate?: Identity<LocationAreasCreateOrConnectWithoutEncounterRatesInput>;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    @Type(() => LocationAreasWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;
}
