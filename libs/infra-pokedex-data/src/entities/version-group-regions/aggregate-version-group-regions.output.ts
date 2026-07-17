import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsCountAggregate } from './version-group-regions-count-aggregate.output';
import { VersionGroupRegionsAvgAggregate } from './version-group-regions-avg-aggregate.output';
import { VersionGroupRegionsSumAggregate } from './version-group-regions-sum-aggregate.output';
import { VersionGroupRegionsMinAggregate } from './version-group-regions-min-aggregate.output';
import { VersionGroupRegionsMaxAggregate } from './version-group-regions-max-aggregate.output';

@ObjectType()
export class AggregateVersionGroupRegions {

    @Field(() => VersionGroupRegionsCountAggregate, {nullable:true})
    _count?: Identity<VersionGroupRegionsCountAggregate>;

    @Field(() => VersionGroupRegionsAvgAggregate, {nullable:true})
    _avg?: Identity<VersionGroupRegionsAvgAggregate>;

    @Field(() => VersionGroupRegionsSumAggregate, {nullable:true})
    _sum?: Identity<VersionGroupRegionsSumAggregate>;

    @Field(() => VersionGroupRegionsMinAggregate, {nullable:true})
    _min?: Identity<VersionGroupRegionsMinAggregate>;

    @Field(() => VersionGroupRegionsMaxAggregate, {nullable:true})
    _max?: Identity<VersionGroupRegionsMaxAggregate>;
}
