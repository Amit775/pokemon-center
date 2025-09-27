import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreasCountAggregate } from './location-areas-count-aggregate.output';
import { LocationAreasAvgAggregate } from './location-areas-avg-aggregate.output';
import { LocationAreasSumAggregate } from './location-areas-sum-aggregate.output';
import { LocationAreasMinAggregate } from './location-areas-min-aggregate.output';
import { LocationAreasMaxAggregate } from './location-areas-max-aggregate.output';

@ObjectType()
export class LocationAreasGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => LocationAreasCountAggregate, {nullable:true})
    _count?: LocationAreasCountAggregate;

    @Field(() => LocationAreasAvgAggregate, {nullable:true})
    _avg?: LocationAreasAvgAggregate;

    @Field(() => LocationAreasSumAggregate, {nullable:true})
    _sum?: LocationAreasSumAggregate;

    @Field(() => LocationAreasMinAggregate, {nullable:true})
    _min?: LocationAreasMinAggregate;

    @Field(() => LocationAreasMaxAggregate, {nullable:true})
    _max?: LocationAreasMaxAggregate;
}
