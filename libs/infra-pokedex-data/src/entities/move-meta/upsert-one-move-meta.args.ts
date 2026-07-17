import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaCreateInput } from './move-meta-create.input';
import { MoveMetaUpdateInput } from './move-meta-update.input';

@ArgsType()
export class UpsertOneMoveMetaArgs {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateInput, {nullable:false})
    @Type(() => MoveMetaCreateInput)
    create!: Identity<MoveMetaCreateInput>;

    @Field(() => MoveMetaUpdateInput, {nullable:false})
    @Type(() => MoveMetaUpdateInput)
    update!: Identity<MoveMetaUpdateInput>;
}
