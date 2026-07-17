import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesCountAggregate } from './location-area-encounter-rates-count-aggregate.output';
import { LocationAreaEncounterRatesAvgAggregate } from './location-area-encounter-rates-avg-aggregate.output';
import { LocationAreaEncounterRatesSumAggregate } from './location-area-encounter-rates-sum-aggregate.output';
import { LocationAreaEncounterRatesMinAggregate } from './location-area-encounter-rates-min-aggregate.output';
import { LocationAreaEncounterRatesMaxAggregate } from './location-area-encounter-rates-max-aggregate.output';

@ObjectType()
export class AggregateLocationAreaEncounterRates {

    @Field(() => LocationAreaEncounterRatesCountAggregate, {nullable:true})
    _count?: Identity<LocationAreaEncounterRatesCountAggregate>;

    @Field(() => LocationAreaEncounterRatesAvgAggregate, {nullable:true})
    _avg?: Identity<LocationAreaEncounterRatesAvgAggregate>;

    @Field(() => LocationAreaEncounterRatesSumAggregate, {nullable:true})
    _sum?: Identity<LocationAreaEncounterRatesSumAggregate>;

    @Field(() => LocationAreaEncounterRatesMinAggregate, {nullable:true})
    _min?: Identity<LocationAreaEncounterRatesMinAggregate>;

    @Field(() => LocationAreaEncounterRatesMaxAggregate, {nullable:true})
    _max?: Identity<LocationAreaEncounterRatesMaxAggregate>;
}
