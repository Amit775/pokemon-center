import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';

@InputType()
export class LocationAreasCreateOrConnectWithoutEncounterRatesInput {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create!: LocationAreasCreateWithoutEncounterRatesInput;
}
