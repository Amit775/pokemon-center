import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { StatsUpdateWithoutMoveMetaStatChangesInput } from './stats-update-without-move-meta-stat-changes.input';

@InputType()
export class StatsUpdateToOneWithWhereWithoutMoveMetaStatChangesInput {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;

    @Field(() => StatsUpdateWithoutMoveMetaStatChangesInput, {nullable:false})
    @Type(() => StatsUpdateWithoutMoveMetaStatChangesInput)
    data!: Identity<StatsUpdateWithoutMoveMetaStatChangesInput>;
}
