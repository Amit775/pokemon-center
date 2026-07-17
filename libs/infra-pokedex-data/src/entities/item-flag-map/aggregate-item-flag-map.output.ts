import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapCountAggregate } from './item-flag-map-count-aggregate.output';
import { ItemFlagMapAvgAggregate } from './item-flag-map-avg-aggregate.output';
import { ItemFlagMapSumAggregate } from './item-flag-map-sum-aggregate.output';
import { ItemFlagMapMinAggregate } from './item-flag-map-min-aggregate.output';
import { ItemFlagMapMaxAggregate } from './item-flag-map-max-aggregate.output';

@ObjectType()
export class AggregateItemFlagMap {

    @Field(() => ItemFlagMapCountAggregate, {nullable:true})
    _count?: Identity<ItemFlagMapCountAggregate>;

    @Field(() => ItemFlagMapAvgAggregate, {nullable:true})
    _avg?: Identity<ItemFlagMapAvgAggregate>;

    @Field(() => ItemFlagMapSumAggregate, {nullable:true})
    _sum?: Identity<ItemFlagMapSumAggregate>;

    @Field(() => ItemFlagMapMinAggregate, {nullable:true})
    _min?: Identity<ItemFlagMapMinAggregate>;

    @Field(() => ItemFlagMapMaxAggregate, {nullable:true})
    _max?: Identity<ItemFlagMapMaxAggregate>;
}
