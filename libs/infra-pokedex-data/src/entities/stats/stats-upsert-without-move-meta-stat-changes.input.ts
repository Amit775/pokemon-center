import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateWithoutMoveMetaStatChangesInput } from './stats-update-without-move-meta-stat-changes.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutMoveMetaStatChangesInput } from './stats-create-without-move-meta-stat-changes.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutMoveMetaStatChangesInput {

    @Field(() => StatsUpdateWithoutMoveMetaStatChangesInput, {nullable:false})
    @Type(() => StatsUpdateWithoutMoveMetaStatChangesInput)
    update!: Identity<StatsUpdateWithoutMoveMetaStatChangesInput>;

    @Field(() => StatsCreateWithoutMoveMetaStatChangesInput, {nullable:false})
    @Type(() => StatsCreateWithoutMoveMetaStatChangesInput)
    create!: Identity<StatsCreateWithoutMoveMetaStatChangesInput>;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;
}
