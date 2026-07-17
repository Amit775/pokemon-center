import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesUpdateWithoutMetaInput } from './move-meta-stat-changes-update-without-meta.input';
import { MoveMetaStatChangesCreateWithoutMetaInput } from './move-meta-stat-changes-create-without-meta.input';

@InputType()
export class MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput {

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => MoveMetaStatChangesUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateWithoutMetaInput)
    update!: MoveMetaStatChangesUpdateWithoutMetaInput;

    @Field(() => MoveMetaStatChangesCreateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaStatChangesCreateWithoutMetaInput)
    create!: MoveMetaStatChangesCreateWithoutMetaInput;
}
