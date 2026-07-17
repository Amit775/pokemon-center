import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCountAggregate } from './regions-count-aggregate.output';
import { RegionsAvgAggregate } from './regions-avg-aggregate.output';
import { RegionsSumAggregate } from './regions-sum-aggregate.output';
import { RegionsMinAggregate } from './regions-min-aggregate.output';
import { RegionsMaxAggregate } from './regions-max-aggregate.output';

@ObjectType()
export class AggregateRegions {

    @Field(() => RegionsCountAggregate, {nullable:true})
    _count?: Identity<RegionsCountAggregate>;

    @Field(() => RegionsAvgAggregate, {nullable:true})
    _avg?: Identity<RegionsAvgAggregate>;

    @Field(() => RegionsSumAggregate, {nullable:true})
    _sum?: Identity<RegionsSumAggregate>;

    @Field(() => RegionsMinAggregate, {nullable:true})
    _min?: Identity<RegionsMinAggregate>;

    @Field(() => RegionsMaxAggregate, {nullable:true})
    _max?: Identity<RegionsMaxAggregate>;
}
