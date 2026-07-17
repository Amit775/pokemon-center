import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';

@InputType()
export class LocationAreasCreateOrConnectWithoutEncountersInput {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasCreateWithoutEncountersInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutEncountersInput)
    create!: LocationAreasCreateWithoutEncountersInput;
}
