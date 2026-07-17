import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationGameIndicesCountAggregate } from './location-game-indices-count-aggregate.output';
import { LocationGameIndicesAvgAggregate } from './location-game-indices-avg-aggregate.output';
import { LocationGameIndicesSumAggregate } from './location-game-indices-sum-aggregate.output';
import { LocationGameIndicesMinAggregate } from './location-game-indices-min-aggregate.output';
import { LocationGameIndicesMaxAggregate } from './location-game-indices-max-aggregate.output';

@ObjectType()
export class LocationGameIndicesGroupBy {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => LocationGameIndicesCountAggregate, {nullable:true})
    _count?: Identity<LocationGameIndicesCountAggregate>;

    @Field(() => LocationGameIndicesAvgAggregate, {nullable:true})
    _avg?: Identity<LocationGameIndicesAvgAggregate>;

    @Field(() => LocationGameIndicesSumAggregate, {nullable:true})
    _sum?: Identity<LocationGameIndicesSumAggregate>;

    @Field(() => LocationGameIndicesMinAggregate, {nullable:true})
    _min?: Identity<LocationGameIndicesMinAggregate>;

    @Field(() => LocationGameIndicesMaxAggregate, {nullable:true})
    _max?: Identity<LocationGameIndicesMaxAggregate>;
}
