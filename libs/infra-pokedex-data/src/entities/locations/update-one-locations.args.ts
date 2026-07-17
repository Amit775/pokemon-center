import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationsUpdateInput } from './locations-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';

@ArgsType()
export class UpdateOneLocationsArgs {

    @Field(() => LocationsUpdateInput, {nullable:false})
    @Type(() => LocationsUpdateInput)
    data!: LocationsUpdateInput;

    @Field(() => LocationsWhereUniqueInput, {nullable:false})
    @Type(() => LocationsWhereUniqueInput)
    where!: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;
}
