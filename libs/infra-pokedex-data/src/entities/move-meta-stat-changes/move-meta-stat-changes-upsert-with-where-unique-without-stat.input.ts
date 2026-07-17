import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesUpdateWithoutStatInput } from './move-meta-stat-changes-update-without-stat.input';
import { MoveMetaStatChangesCreateWithoutStatInput } from './move-meta-stat-changes-create-without-stat.input';

@InputType()
export class MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput {

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => MoveMetaStatChangesUpdateWithoutStatInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateWithoutStatInput)
    update!: MoveMetaStatChangesUpdateWithoutStatInput;

    @Field(() => MoveMetaStatChangesCreateWithoutStatInput, {nullable:false})
    @Type(() => MoveMetaStatChangesCreateWithoutStatInput)
    create!: MoveMetaStatChangesCreateWithoutStatInput;
}
