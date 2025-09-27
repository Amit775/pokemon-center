import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagsWhereInput } from './move-flags-where.input';
import { Type } from 'class-transformer';
import { MoveFlagsOrderByWithRelationInput } from './move-flags-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveFlagsScalarFieldEnum } from './move-flags-scalar-field.enum';

@ArgsType()
export class FindManyMoveFlagsArgs {

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    @Type(() => MoveFlagsWhereInput)
    where?: MoveFlagsWhereInput;

    @Field(() => [MoveFlagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveFlagsOrderByWithRelationInput>;

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveFlagsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveFlagsScalarFieldEnum}`>;
}
