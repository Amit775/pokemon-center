import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationsUpdateWithoutRegionInput } from './locations-update-without-region.input';

@InputType()
export class LocationsUpdateWithWhereUniqueWithoutRegionInput {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => LocationsUpdateWithoutRegionInput)
    data!: Identity<LocationsUpdateWithoutRegionInput>;
}
