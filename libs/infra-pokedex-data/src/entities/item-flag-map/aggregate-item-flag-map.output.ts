import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemFlagMapCountAggregate } from './item-flag-map-count-aggregate.output';
import { ItemFlagMapAvgAggregate } from './item-flag-map-avg-aggregate.output';
import { ItemFlagMapSumAggregate } from './item-flag-map-sum-aggregate.output';
import { ItemFlagMapMinAggregate } from './item-flag-map-min-aggregate.output';
import { ItemFlagMapMaxAggregate } from './item-flag-map-max-aggregate.output';

@ObjectType()
export class AggregateItemFlagMap {

    @Field(() => ItemFlagMapCountAggregate, {nullable:true})
    _count?: ItemFlagMapCountAggregate;

    @Field(() => ItemFlagMapAvgAggregate, {nullable:true})
    _avg?: ItemFlagMapAvgAggregate;

    @Field(() => ItemFlagMapSumAggregate, {nullable:true})
    _sum?: ItemFlagMapSumAggregate;

    @Field(() => ItemFlagMapMinAggregate, {nullable:true})
    _min?: ItemFlagMapMinAggregate;

    @Field(() => ItemFlagMapMaxAggregate, {nullable:true})
    _max?: ItemFlagMapMaxAggregate;
}
