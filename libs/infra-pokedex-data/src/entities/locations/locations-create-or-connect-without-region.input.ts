import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationsCreateWithoutRegionInput } from './locations-create-without-region.input';

@InputType()
export class LocationsCreateOrConnectWithoutRegionInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsCreateWithoutRegionInput, {nullable:false})
    @Type(() => LocationsCreateWithoutRegionInput)
    create!: Identity<LocationsCreateWithoutRegionInput>;
}
