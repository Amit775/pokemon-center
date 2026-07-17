import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesCreateWithoutStatInput } from './move-meta-stat-changes-create-without-stat.input';

@InputType()
export class MoveMetaStatChangesCreateOrConnectWithoutStatInput {

    @Field(() => MoveMetaStatChangesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>;

    @Field(() => MoveMetaStatChangesCreateWithoutStatInput, {nullable:false})
    @Type(() => MoveMetaStatChangesCreateWithoutStatInput)
    create!: MoveMetaStatChangesCreateWithoutStatInput;
}
