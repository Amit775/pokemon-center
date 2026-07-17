import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesOrderByWithRelationInput } from './moves-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MovesScalarFieldEnum } from './moves-scalar-field.enum';

@ArgsType()
export class FindManyMovesArgs {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => [MovesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MovesOrderByWithRelationInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MovesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MovesScalarFieldEnum}`>;
}
