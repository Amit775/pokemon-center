import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesCountAggregate } from './move-meta-stat-changes-count-aggregate.output';
import { MoveMetaStatChangesAvgAggregate } from './move-meta-stat-changes-avg-aggregate.output';
import { MoveMetaStatChangesSumAggregate } from './move-meta-stat-changes-sum-aggregate.output';
import { MoveMetaStatChangesMinAggregate } from './move-meta-stat-changes-min-aggregate.output';
import { MoveMetaStatChangesMaxAggregate } from './move-meta-stat-changes-max-aggregate.output';

@ObjectType()
export class MoveMetaStatChangesGroupBy {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => MoveMetaStatChangesCountAggregate, {nullable:true})
    _count?: Identity<MoveMetaStatChangesCountAggregate>;

    @Field(() => MoveMetaStatChangesAvgAggregate, {nullable:true})
    _avg?: Identity<MoveMetaStatChangesAvgAggregate>;

    @Field(() => MoveMetaStatChangesSumAggregate, {nullable:true})
    _sum?: Identity<MoveMetaStatChangesSumAggregate>;

    @Field(() => MoveMetaStatChangesMinAggregate, {nullable:true})
    _min?: Identity<MoveMetaStatChangesMinAggregate>;

    @Field(() => MoveMetaStatChangesMaxAggregate, {nullable:true})
    _max?: Identity<MoveMetaStatChangesMaxAggregate>;
}
