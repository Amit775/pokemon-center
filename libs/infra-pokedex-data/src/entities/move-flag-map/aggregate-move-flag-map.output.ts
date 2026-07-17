import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapCountAggregate } from './move-flag-map-count-aggregate.output';
import { MoveFlagMapAvgAggregate } from './move-flag-map-avg-aggregate.output';
import { MoveFlagMapSumAggregate } from './move-flag-map-sum-aggregate.output';
import { MoveFlagMapMinAggregate } from './move-flag-map-min-aggregate.output';
import { MoveFlagMapMaxAggregate } from './move-flag-map-max-aggregate.output';

@ObjectType()
export class AggregateMoveFlagMap {

    @Field(() => MoveFlagMapCountAggregate, {nullable:true})
    _count?: Identity<MoveFlagMapCountAggregate>;

    @Field(() => MoveFlagMapAvgAggregate, {nullable:true})
    _avg?: Identity<MoveFlagMapAvgAggregate>;

    @Field(() => MoveFlagMapSumAggregate, {nullable:true})
    _sum?: Identity<MoveFlagMapSumAggregate>;

    @Field(() => MoveFlagMapMinAggregate, {nullable:true})
    _min?: Identity<MoveFlagMapMinAggregate>;

    @Field(() => MoveFlagMapMaxAggregate, {nullable:true})
    _max?: Identity<MoveFlagMapMaxAggregate>;
}
