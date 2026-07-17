import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationAreasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';

@InputType()
export class LocationAreasCreateOrConnectWithoutEncountersInput {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasCreateWithoutEncountersInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutEncountersInput)
    create!: Identity<LocationAreasCreateWithoutEncountersInput>;
}
