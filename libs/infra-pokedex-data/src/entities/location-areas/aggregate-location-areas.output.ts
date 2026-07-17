import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasCountAggregate } from './location-areas-count-aggregate.output';
import { LocationAreasAvgAggregate } from './location-areas-avg-aggregate.output';
import { LocationAreasSumAggregate } from './location-areas-sum-aggregate.output';
import { LocationAreasMinAggregate } from './location-areas-min-aggregate.output';
import { LocationAreasMaxAggregate } from './location-areas-max-aggregate.output';

@ObjectType()
export class AggregateLocationAreas {

    @Field(() => LocationAreasCountAggregate, {nullable:true})
    _count?: Identity<LocationAreasCountAggregate>;

    @Field(() => LocationAreasAvgAggregate, {nullable:true})
    _avg?: Identity<LocationAreasAvgAggregate>;

    @Field(() => LocationAreasSumAggregate, {nullable:true})
    _sum?: Identity<LocationAreasSumAggregate>;

    @Field(() => LocationAreasMinAggregate, {nullable:true})
    _min?: Identity<LocationAreasMinAggregate>;

    @Field(() => LocationAreasMaxAggregate, {nullable:true})
    _max?: Identity<LocationAreasMaxAggregate>;
}
