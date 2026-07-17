import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { LocationsCreateInput } from './locations-create.input';
import { LocationsUpdateInput } from './locations-update.input';

@ArgsType()
export class UpsertOneLocationsArgs {

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsCreateInput, {nullable:false})
    @Type(() => LocationsCreateInput)
    create!: LocationsCreateInput;

    @Field(() => LocationsUpdateInput, {nullable:false})
    @Type(() => LocationsUpdateInput)
    update!: LocationsUpdateInput;
}
