import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUpdateInput } from './locations-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';

@ArgsType()
export class UpdateOneLocationsArgs {

    @Field(() => LocationsUpdateInput, {nullable:false})
    @Type(() => LocationsUpdateInput)
    data!: Identity<LocationsUpdateInput>;

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;
}
