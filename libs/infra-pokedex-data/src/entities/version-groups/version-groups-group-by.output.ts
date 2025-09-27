import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupsCountAggregate } from './version-groups-count-aggregate.output';
import { VersionGroupsAvgAggregate } from './version-groups-avg-aggregate.output';
import { VersionGroupsSumAggregate } from './version-groups-sum-aggregate.output';
import { VersionGroupsMinAggregate } from './version-groups-min-aggregate.output';
import { VersionGroupsMaxAggregate } from './version-groups-max-aggregate.output';

@ObjectType()
export class VersionGroupsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => VersionGroupsCountAggregate, {nullable:true})
    _count?: VersionGroupsCountAggregate;

    @Field(() => VersionGroupsAvgAggregate, {nullable:true})
    _avg?: VersionGroupsAvgAggregate;

    @Field(() => VersionGroupsSumAggregate, {nullable:true})
    _sum?: VersionGroupsSumAggregate;

    @Field(() => VersionGroupsMinAggregate, {nullable:true})
    _min?: VersionGroupsMinAggregate;

    @Field(() => VersionGroupsMaxAggregate, {nullable:true})
    _max?: VersionGroupsMaxAggregate;
}
