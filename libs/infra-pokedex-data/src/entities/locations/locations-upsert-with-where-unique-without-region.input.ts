import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationsUpdateWithoutRegionInput } from './locations-update-without-region.input';
import { LocationsCreateWithoutRegionInput } from './locations-create-without-region.input';

@InputType()
export class LocationsUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutRegionInput)
    update!: Identity<LocationsUpdateWithoutRegionInput>;

    @Field(() => LocationsCreateWithoutRegionInput, {nullable:false})
    @Type(() => LocationsCreateWithoutRegionInput)
    create!: Identity<LocationsCreateWithoutRegionInput>;
}
