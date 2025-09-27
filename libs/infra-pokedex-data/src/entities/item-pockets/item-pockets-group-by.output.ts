import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemPocketsCountAggregate } from './item-pockets-count-aggregate.output';
import { ItemPocketsAvgAggregate } from './item-pockets-avg-aggregate.output';
import { ItemPocketsSumAggregate } from './item-pockets-sum-aggregate.output';
import { ItemPocketsMinAggregate } from './item-pockets-min-aggregate.output';
import { ItemPocketsMaxAggregate } from './item-pockets-max-aggregate.output';

@ObjectType()
export class ItemPocketsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemPocketsCountAggregate, {nullable:true})
    _count?: ItemPocketsCountAggregate;

    @Field(() => ItemPocketsAvgAggregate, {nullable:true})
    _avg?: ItemPocketsAvgAggregate;

    @Field(() => ItemPocketsSumAggregate, {nullable:true})
    _sum?: ItemPocketsSumAggregate;

    @Field(() => ItemPocketsMinAggregate, {nullable:true})
    _min?: ItemPocketsMinAggregate;

    @Field(() => ItemPocketsMaxAggregate, {nullable:true})
    _max?: ItemPocketsMaxAggregate;
}
