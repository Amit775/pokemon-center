import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { LocationAreasOrderByWithAggregationInput } from './location-areas-order-by-with-aggregation.input';
import { LocationAreasScalarFieldEnum } from './location-areas-scalar-field.enum';
import { LocationAreasScalarWhereWithAggregatesInput } from './location-areas-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LocationAreasCountAggregateInput } from './location-areas-count-aggregate.input';
import { LocationAreasAvgAggregateInput } from './location-areas-avg-aggregate.input';
import { LocationAreasSumAggregateInput } from './location-areas-sum-aggregate.input';
import { LocationAreasMinAggregateInput } from './location-areas-min-aggregate.input';
import { LocationAreasMaxAggregateInput } from './location-areas-max-aggregate.input';

@ArgsType()
export class LocationAreasGroupByArgs {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: Identity<LocationAreasWhereInput>;

    @Field(() => [LocationAreasOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LocationAreasOrderByWithAggregationInput>;

    @Field(() => [LocationAreasScalarFieldEnum], {nullable:false})
    by!: Array<`${LocationAreasScalarFieldEnum}`>;

    @Field(() => LocationAreasScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationAreasCountAggregateInput, {nullable:true})
    _count?: Identity<LocationAreasCountAggregateInput>;

    @Field(() => LocationAreasAvgAggregateInput, {nullable:true})
    _avg?: Identity<LocationAreasAvgAggregateInput>;

    @Field(() => LocationAreasSumAggregateInput, {nullable:true})
    _sum?: Identity<LocationAreasSumAggregateInput>;

    @Field(() => LocationAreasMinAggregateInput, {nullable:true})
    _min?: Identity<LocationAreasMinAggregateInput>;

    @Field(() => LocationAreasMaxAggregateInput, {nullable:true})
    _max?: Identity<LocationAreasMaxAggregateInput>;
}
