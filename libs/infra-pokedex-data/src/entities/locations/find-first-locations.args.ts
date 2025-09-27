import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { LocationsOrderByWithRelationInput } from './locations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationsScalarFieldEnum } from './locations-scalar-field.enum';

@ArgsType()
export class FindFirstLocationsArgs {

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: LocationsWhereInput;

    @Field(() => [LocationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationsOrderByWithRelationInput>;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LocationsScalarFieldEnum}`>;
}
