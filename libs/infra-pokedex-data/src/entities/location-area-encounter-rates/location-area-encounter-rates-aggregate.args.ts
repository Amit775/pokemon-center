import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesOrderByWithRelationInput } from './location-area-encounter-rates-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCountAggregateInput } from './location-area-encounter-rates-count-aggregate.input';
import { LocationAreaEncounterRatesAvgAggregateInput } from './location-area-encounter-rates-avg-aggregate.input';
import { LocationAreaEncounterRatesSumAggregateInput } from './location-area-encounter-rates-sum-aggregate.input';
import { LocationAreaEncounterRatesMinAggregateInput } from './location-area-encounter-rates-min-aggregate.input';
import { LocationAreaEncounterRatesMaxAggregateInput } from './location-area-encounter-rates-max-aggregate.input';

@ArgsType()
export class LocationAreaEncounterRatesAggregateArgs {

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereInput)
    where?: LocationAreaEncounterRatesWhereInput;

    @Field(() => [LocationAreaEncounterRatesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationAreaEncounterRatesOrderByWithRelationInput>;

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

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
