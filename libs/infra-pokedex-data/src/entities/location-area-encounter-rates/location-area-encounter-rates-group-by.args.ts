import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesOrderByWithAggregationInput } from './location-area-encounter-rates-order-by-with-aggregation.input';
import { LocationAreaEncounterRatesScalarFieldEnum } from './location-area-encounter-rates-scalar-field.enum';
import { LocationAreaEncounterRatesScalarWhereWithAggregatesInput } from './location-area-encounter-rates-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCountAggregateInput } from './location-area-encounter-rates-count-aggregate.input';
import { LocationAreaEncounterRatesAvgAggregateInput } from './location-area-encounter-rates-avg-aggregate.input';
import { LocationAreaEncounterRatesSumAggregateInput } from './location-area-encounter-rates-sum-aggregate.input';
import { LocationAreaEncounterRatesMinAggregateInput } from './location-area-encounter-rates-min-aggregate.input';
import { LocationAreaEncounterRatesMaxAggregateInput } from './location-area-encounter-rates-max-aggregate.input';

@ArgsType()
export class LocationAreaEncounterRatesGroupByArgs {

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereInput)
    where?: LocationAreaEncounterRatesWhereInput;

    @Field(() => [LocationAreaEncounterRatesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LocationAreaEncounterRatesOrderByWithAggregationInput>;

    @Field(() => [LocationAreaEncounterRatesScalarFieldEnum], {nullable:false})
    by!: Array<`${LocationAreaEncounterRatesScalarFieldEnum}`>;

    @Field(() => LocationAreaEncounterRatesScalarWhereWithAggregatesInput, {nullable:true})
    having?: LocationAreaEncounterRatesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationAreaEncounterRatesCountAggregateInput, {nullable:true})
    _count?: LocationAreaEncounterRatesCountAggregateInput;

    @Field(() => LocationAreaEncounterRatesAvgAggregateInput, {nullable:true})
    _avg?: LocationAreaEncounterRatesAvgAggregateInput;

    @Field(() => LocationAreaEncounterRatesSumAggregateInput, {nullable:true})
    _sum?: LocationAreaEncounterRatesSumAggregateInput;

    @Field(() => LocationAreaEncounterRatesMinAggregateInput, {nullable:true})
    _min?: LocationAreaEncounterRatesMinAggregateInput;

    @Field(() => LocationAreaEncounterRatesMaxAggregateInput, {nullable:true})
    _max?: LocationAreaEncounterRatesMaxAggregateInput;
}
