import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaStatChangesUpdateInput } from './move-meta-stat-changes-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';

@ArgsType()
export class UpdateOneMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesUpdateInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateInput)
    data!: MoveMetaStatChangesUpdateInput;

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;
}
