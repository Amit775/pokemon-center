import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesCreateInput } from './move-meta-stat-changes-create.input';
import { MoveMetaStatChangesUpdateInput } from './move-meta-stat-changes-update.input';

@ArgsType()
export class UpsertOneMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => MoveMetaStatChangesCreateInput, {nullable:false})
    @Type(() => MoveMetaStatChangesCreateInput)
    create!: MoveMetaStatChangesCreateInput;

    @Field(() => MoveMetaStatChangesUpdateInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateInput)
    update!: MoveMetaStatChangesUpdateInput;
}
