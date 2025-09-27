import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GrowthRatesCountAggregate } from './growth-rates-count-aggregate.output';
import { GrowthRatesAvgAggregate } from './growth-rates-avg-aggregate.output';
import { GrowthRatesSumAggregate } from './growth-rates-sum-aggregate.output';
import { GrowthRatesMinAggregate } from './growth-rates-min-aggregate.output';
import { GrowthRatesMaxAggregate } from './growth-rates-max-aggregate.output';

@ObjectType()
export class AggregateGrowthRates {

    @Field(() => GrowthRatesCountAggregate, {nullable:true})
    _count?: GrowthRatesCountAggregate;

    @Field(() => GrowthRatesAvgAggregate, {nullable:true})
    _avg?: GrowthRatesAvgAggregate;

    @Field(() => GrowthRatesSumAggregate, {nullable:true})
    _sum?: GrowthRatesSumAggregate;

    @Field(() => GrowthRatesMinAggregate, {nullable:true})
    _min?: GrowthRatesMinAggregate;

    @Field(() => GrowthRatesMaxAggregate, {nullable:true})
    _max?: GrowthRatesMaxAggregate;
}
