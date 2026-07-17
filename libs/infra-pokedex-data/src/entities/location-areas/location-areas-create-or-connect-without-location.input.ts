import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateWithoutLocationInput } from './location-areas-create-without-location.input';

@InputType()
export class LocationAreasCreateOrConnectWithoutLocationInput {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasCreateWithoutLocationInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutLocationInput)
    create!: LocationAreasCreateWithoutLocationInput;
}
