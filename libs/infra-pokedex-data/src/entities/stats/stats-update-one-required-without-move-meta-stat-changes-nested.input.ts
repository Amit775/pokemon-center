import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutMoveMetaStatChangesInput } from './stats-create-without-move-meta-stat-changes.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutMoveMetaStatChangesInput } from './stats-create-or-connect-without-move-meta-stat-changes.input';
import { StatsUpsertWithoutMoveMetaStatChangesInput } from './stats-upsert-without-move-meta-stat-changes.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput } from './stats-update-to-one-with-where-without-move-meta-stat-changes.input';

@InputType()
export class StatsUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput {

    @Field(() => StatsCreateWithoutMoveMetaStatChangesInput, {nullable:true})
    @Type(() => StatsCreateWithoutMoveMetaStatChangesInput)
    create?: StatsCreateWithoutMoveMetaStatChangesInput;

    @Field(() => StatsCreateOrConnectWithoutMoveMetaStatChangesInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutMoveMetaStatChangesInput)
    connectOrCreate?: StatsCreateOrConnectWithoutMoveMetaStatChangesInput;

    @Field(() => StatsUpsertWithoutMoveMetaStatChangesInput, {nullable:true})
    @Type(() => StatsUpsertWithoutMoveMetaStatChangesInput)
    upsert?: StatsUpsertWithoutMoveMetaStatChangesInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput, {nullable:true})
    @Type(() => StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput)
    update?: StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput;
}
