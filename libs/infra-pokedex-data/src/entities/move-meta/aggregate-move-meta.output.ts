import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCountAggregate } from './move-meta-count-aggregate.output';
import { MoveMetaAvgAggregate } from './move-meta-avg-aggregate.output';
import { MoveMetaSumAggregate } from './move-meta-sum-aggregate.output';
import { MoveMetaMinAggregate } from './move-meta-min-aggregate.output';
import { MoveMetaMaxAggregate } from './move-meta-max-aggregate.output';

@ObjectType()
export class AggregateMoveMeta {

    @Field(() => MoveMetaCountAggregate, {nullable:true})
    _count?: Identity<MoveMetaCountAggregate>;

    @Field(() => MoveMetaAvgAggregate, {nullable:true})
    _avg?: Identity<MoveMetaAvgAggregate>;

    @Field(() => MoveMetaSumAggregate, {nullable:true})
    _sum?: Identity<MoveMetaSumAggregate>;

    @Field(() => MoveMetaMinAggregate, {nullable:true})
    _min?: Identity<MoveMetaMinAggregate>;

    @Field(() => MoveMetaMaxAggregate, {nullable:true})
    _max?: Identity<MoveMetaMaxAggregate>;
}
