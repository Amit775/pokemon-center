import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemGameIndicesCountAggregate } from './item-game-indices-count-aggregate.output';
import { ItemGameIndicesAvgAggregate } from './item-game-indices-avg-aggregate.output';
import { ItemGameIndicesSumAggregate } from './item-game-indices-sum-aggregate.output';
import { ItemGameIndicesMinAggregate } from './item-game-indices-min-aggregate.output';
import { ItemGameIndicesMaxAggregate } from './item-game-indices-max-aggregate.output';

@ObjectType()
export class ItemGameIndicesGroupBy {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => ItemGameIndicesCountAggregate, {nullable:true})
    _count?: ItemGameIndicesCountAggregate;

    @Field(() => ItemGameIndicesAvgAggregate, {nullable:true})
    _avg?: ItemGameIndicesAvgAggregate;

    @Field(() => ItemGameIndicesSumAggregate, {nullable:true})
    _sum?: ItemGameIndicesSumAggregate;

    @Field(() => ItemGameIndicesMinAggregate, {nullable:true})
    _min?: ItemGameIndicesMinAggregate;

    @Field(() => ItemGameIndicesMaxAggregate, {nullable:true})
    _max?: ItemGameIndicesMaxAggregate;
}
