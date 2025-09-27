import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesOrderByWithRelationInput } from './move-meta-categories-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaCategoriesScalarFieldEnum } from './move-meta-categories-scalar-field.enum';

@ArgsType()
export class FindFirstMoveMetaCategoriesOrThrowArgs {

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereInput)
    where?: MoveMetaCategoriesWhereInput;

    @Field(() => [MoveMetaCategoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaCategoriesOrderByWithRelationInput>;

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveMetaCategoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveMetaCategoriesScalarFieldEnum}`>;
}
