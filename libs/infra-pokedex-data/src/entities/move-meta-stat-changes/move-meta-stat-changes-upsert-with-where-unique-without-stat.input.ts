import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesUpdateWithoutStatInput } from './move-meta-stat-changes-update-without-stat.input';
import { MoveMetaStatChangesCreateWithoutStatInput } from './move-meta-stat-changes-create-without-stat.input';

@InputType()
export class MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput {

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => MoveMetaStatChangesUpdateWithoutStatInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateWithoutStatInput)
    update!: Identity<MoveMetaStatChangesUpdateWithoutStatInput>;

    @Field(() => MoveMetaStatChangesCreateWithoutStatInput, {nullable:false})
    @Type(() => MoveMetaStatChangesCreateWithoutStatInput)
    create!: Identity<MoveMetaStatChangesCreateWithoutStatInput>;
}
