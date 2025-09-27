import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Type } from 'class-transformer';
import { MoveMetaOrderByWithRelationInput } from './move-meta-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaScalarFieldEnum } from './move-meta-scalar-field.enum';

@ArgsType()
export class FindManyMoveMetaArgs {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: MoveMetaWhereInput;

    @Field(() => [MoveMetaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaOrderByWithRelationInput>;

    @Field(() => MoveMetaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveMetaScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveMetaScalarFieldEnum}`>;
}
