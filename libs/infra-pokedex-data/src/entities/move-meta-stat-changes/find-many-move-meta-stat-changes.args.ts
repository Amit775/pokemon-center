import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesOrderByWithRelationInput } from './move-meta-stat-changes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaStatChangesScalarFieldEnum } from './move-meta-stat-changes-scalar-field.enum';

@ArgsType()
export class FindManyMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    @Type(() => MoveMetaStatChangesWhereInput)
    where?: MoveMetaStatChangesWhereInput;

    @Field(() => [MoveMetaStatChangesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaStatChangesOrderByWithRelationInput>;

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveMetaStatChangesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveMetaStatChangesScalarFieldEnum}`>;
}
