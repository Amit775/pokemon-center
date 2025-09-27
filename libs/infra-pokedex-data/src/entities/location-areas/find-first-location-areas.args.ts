import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { LocationAreasOrderByWithRelationInput } from './location-areas-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationAreasScalarFieldEnum } from './location-areas-scalar-field.enum';

@ArgsType()
export class FindFirstLocationAreasArgs {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;

    @Field(() => [LocationAreasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationAreasOrderByWithRelationInput>;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationAreasScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LocationAreasScalarFieldEnum}`>;
}
