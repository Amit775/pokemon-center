import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationAreasCreateWithoutLocationInput } from './location-areas-create-without-location.input';

@InputType()
export class LocationAreasCreateOrConnectWithoutLocationInput {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasCreateWithoutLocationInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutLocationInput)
    create!: Identity<LocationAreasCreateWithoutLocationInput>;
}
