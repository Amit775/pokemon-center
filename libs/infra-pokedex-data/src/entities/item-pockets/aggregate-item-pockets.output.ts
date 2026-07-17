import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsCountAggregate } from './item-pockets-count-aggregate.output';
import { ItemPocketsAvgAggregate } from './item-pockets-avg-aggregate.output';
import { ItemPocketsSumAggregate } from './item-pockets-sum-aggregate.output';
import { ItemPocketsMinAggregate } from './item-pockets-min-aggregate.output';
import { ItemPocketsMaxAggregate } from './item-pockets-max-aggregate.output';

@ObjectType()
export class AggregateItemPockets {

    @Field(() => ItemPocketsCountAggregate, {nullable:true})
    _count?: Identity<ItemPocketsCountAggregate>;

    @Field(() => ItemPocketsAvgAggregate, {nullable:true})
    _avg?: Identity<ItemPocketsAvgAggregate>;

    @Field(() => ItemPocketsSumAggregate, {nullable:true})
    _sum?: Identity<ItemPocketsSumAggregate>;

    @Field(() => ItemPocketsMinAggregate, {nullable:true})
    _min?: Identity<ItemPocketsMinAggregate>;

    @Field(() => ItemPocketsMaxAggregate, {nullable:true})
    _max?: Identity<ItemPocketsMaxAggregate>;
}
