import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsOrderByWithRelationInput } from './generations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenerationsScalarFieldEnum } from './generations-scalar-field.enum';

@ArgsType()
export class FindFirstGenerationsOrThrowArgs {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => [GenerationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenerationsOrderByWithRelationInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GenerationsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${GenerationsScalarFieldEnum}`>;
}
