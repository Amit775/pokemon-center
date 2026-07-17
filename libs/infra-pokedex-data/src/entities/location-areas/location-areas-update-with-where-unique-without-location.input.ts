import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreasUpdateWithoutLocationInput } from './location-areas-update-without-location.input';

@InputType()
export class LocationAreasUpdateWithWhereUniqueWithoutLocationInput {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasUpdateWithoutLocationInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutLocationInput)
    data!: LocationAreasUpdateWithoutLocationInput;
}
