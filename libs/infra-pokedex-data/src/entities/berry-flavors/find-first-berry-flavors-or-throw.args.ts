import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFlavorsWhereInput } from './berry-flavors-where.input';
import { Type } from 'class-transformer';
import { BerryFlavorsOrderByWithRelationInput } from './berry-flavors-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BerryFlavorsScalarFieldEnum } from './berry-flavors-scalar-field.enum';

@ArgsType()
export class FindFirstBerryFlavorsOrThrowArgs {

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    @Type(() => BerryFlavorsWhereInput)
    where?: BerryFlavorsWhereInput;

    @Field(() => [BerryFlavorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BerryFlavorsOrderByWithRelationInput>;

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BerryFlavorsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BerryFlavorsScalarFieldEnum}`>;
}
