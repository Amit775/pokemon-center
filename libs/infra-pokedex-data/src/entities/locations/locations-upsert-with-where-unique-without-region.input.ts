import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { LocationsUpdateWithoutRegionInput } from './locations-update-without-region.input';
import { LocationsCreateWithoutRegionInput } from './locations-create-without-region.input';

@InputType()
export class LocationsUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutRegionInput)
    update!: LocationsUpdateWithoutRegionInput;

    @Field(() => LocationsCreateWithoutRegionInput, {nullable:false})
    @Type(() => LocationsCreateWithoutRegionInput)
    create!: LocationsCreateWithoutRegionInput;
}
