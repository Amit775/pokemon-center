import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LocationGameIndicesCountAggregate } from './location-game-indices-count-aggregate.output';
import { LocationGameIndicesAvgAggregate } from './location-game-indices-avg-aggregate.output';
import { LocationGameIndicesSumAggregate } from './location-game-indices-sum-aggregate.output';
import { LocationGameIndicesMinAggregate } from './location-game-indices-min-aggregate.output';
import { LocationGameIndicesMaxAggregate } from './location-game-indices-max-aggregate.output';

@ObjectType()
export class AggregateLocationGameIndices {

    @Field(() => LocationGameIndicesCountAggregate, {nullable:true})
    _count?: LocationGameIndicesCountAggregate;

    @Field(() => LocationGameIndicesAvgAggregate, {nullable:true})
    _avg?: LocationGameIndicesAvgAggregate;

    @Field(() => LocationGameIndicesSumAggregate, {nullable:true})
    _sum?: LocationGameIndicesSumAggregate;

    @Field(() => LocationGameIndicesMinAggregate, {nullable:true})
    _min?: LocationGameIndicesMinAggregate;

    @Field(() => LocationGameIndicesMaxAggregate, {nullable:true})
    _max?: LocationGameIndicesMaxAggregate;
}
