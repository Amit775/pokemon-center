import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsCountAggregate } from './locations-count-aggregate.output';
import { LocationsAvgAggregate } from './locations-avg-aggregate.output';
import { LocationsSumAggregate } from './locations-sum-aggregate.output';
import { LocationsMinAggregate } from './locations-min-aggregate.output';
import { LocationsMaxAggregate } from './locations-max-aggregate.output';

@ObjectType()
export class LocationsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => LocationsCountAggregate, {nullable:true})
    _count?: Identity<LocationsCountAggregate>;

    @Field(() => LocationsAvgAggregate, {nullable:true})
    _avg?: Identity<LocationsAvgAggregate>;

    @Field(() => LocationsSumAggregate, {nullable:true})
    _sum?: Identity<LocationsSumAggregate>;

    @Field(() => LocationsMinAggregate, {nullable:true})
    _min?: Identity<LocationsMinAggregate>;

    @Field(() => LocationsMaxAggregate, {nullable:true})
    _max?: Identity<LocationsMaxAggregate>;
}
