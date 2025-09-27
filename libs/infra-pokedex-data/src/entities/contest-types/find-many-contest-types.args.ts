import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { Type } from 'class-transformer';
import { ContestTypesOrderByWithRelationInput } from './contest-types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContestTypesScalarFieldEnum } from './contest-types-scalar-field.enum';

@ArgsType()
export class FindManyContestTypesArgs {

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: ContestTypesWhereInput;

    @Field(() => [ContestTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContestTypesOrderByWithRelationInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContestTypesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ContestTypesScalarFieldEnum}`>;
}
