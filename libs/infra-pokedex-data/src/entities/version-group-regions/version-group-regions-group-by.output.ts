import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupRegionsCountAggregate } from './version-group-regions-count-aggregate.output';
import { VersionGroupRegionsAvgAggregate } from './version-group-regions-avg-aggregate.output';
import { VersionGroupRegionsSumAggregate } from './version-group-regions-sum-aggregate.output';
import { VersionGroupRegionsMinAggregate } from './version-group-regions-min-aggregate.output';
import { VersionGroupRegionsMaxAggregate } from './version-group-regions-max-aggregate.output';

@ObjectType()
export class VersionGroupRegionsGroupBy {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => VersionGroupRegionsCountAggregate, {nullable:true})
    _count?: VersionGroupRegionsCountAggregate;

    @Field(() => VersionGroupRegionsAvgAggregate, {nullable:true})
    _avg?: VersionGroupRegionsAvgAggregate;

    @Field(() => VersionGroupRegionsSumAggregate, {nullable:true})
    _sum?: VersionGroupRegionsSumAggregate;

    @Field(() => VersionGroupRegionsMinAggregate, {nullable:true})
    _min?: VersionGroupRegionsMinAggregate;

    @Field(() => VersionGroupRegionsMaxAggregate, {nullable:true})
    _max?: VersionGroupRegionsMaxAggregate;
}
