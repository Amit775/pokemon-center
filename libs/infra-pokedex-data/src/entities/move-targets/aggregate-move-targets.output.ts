import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsCountAggregate } from './move-targets-count-aggregate.output';
import { MoveTargetsAvgAggregate } from './move-targets-avg-aggregate.output';
import { MoveTargetsSumAggregate } from './move-targets-sum-aggregate.output';
import { MoveTargetsMinAggregate } from './move-targets-min-aggregate.output';
import { MoveTargetsMaxAggregate } from './move-targets-max-aggregate.output';

@ObjectType()
export class AggregateMoveTargets {

    @Field(() => MoveTargetsCountAggregate, {nullable:true})
    _count?: Identity<MoveTargetsCountAggregate>;

    @Field(() => MoveTargetsAvgAggregate, {nullable:true})
    _avg?: Identity<MoveTargetsAvgAggregate>;

    @Field(() => MoveTargetsSumAggregate, {nullable:true})
    _sum?: Identity<MoveTargetsSumAggregate>;

    @Field(() => MoveTargetsMinAggregate, {nullable:true})
    _min?: Identity<MoveTargetsMinAggregate>;

    @Field(() => MoveTargetsMaxAggregate, {nullable:true})
    _max?: Identity<MoveTargetsMaxAggregate>;
}
