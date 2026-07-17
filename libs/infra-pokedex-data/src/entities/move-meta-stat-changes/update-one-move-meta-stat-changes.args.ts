import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesUpdateInput } from './move-meta-stat-changes-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';

@ArgsType()
export class UpdateOneMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesUpdateInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateInput)
    data!: Identity<MoveMetaStatChangesUpdateInput>;

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;
}
