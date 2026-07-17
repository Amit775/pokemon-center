import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesCountAggregate } from './growth-rates-count-aggregate.output';
import { GrowthRatesAvgAggregate } from './growth-rates-avg-aggregate.output';
import { GrowthRatesSumAggregate } from './growth-rates-sum-aggregate.output';
import { GrowthRatesMinAggregate } from './growth-rates-min-aggregate.output';
import { GrowthRatesMaxAggregate } from './growth-rates-max-aggregate.output';

@ObjectType()
export class GrowthRatesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => GrowthRatesCountAggregate, {nullable:true})
    _count?: Identity<GrowthRatesCountAggregate>;

    @Field(() => GrowthRatesAvgAggregate, {nullable:true})
    _avg?: Identity<GrowthRatesAvgAggregate>;

    @Field(() => GrowthRatesSumAggregate, {nullable:true})
    _sum?: Identity<GrowthRatesSumAggregate>;

    @Field(() => GrowthRatesMinAggregate, {nullable:true})
    _min?: Identity<GrowthRatesMinAggregate>;

    @Field(() => GrowthRatesMaxAggregate, {nullable:true})
    _max?: Identity<GrowthRatesMaxAggregate>;
}
