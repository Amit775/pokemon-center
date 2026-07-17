import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCountAggregate } from './versions-count-aggregate.output';
import { VersionsAvgAggregate } from './versions-avg-aggregate.output';
import { VersionsSumAggregate } from './versions-sum-aggregate.output';
import { VersionsMinAggregate } from './versions-min-aggregate.output';
import { VersionsMaxAggregate } from './versions-max-aggregate.output';

@ObjectType()
export class VersionsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => VersionsCountAggregate, {nullable:true})
    _count?: Identity<VersionsCountAggregate>;

    @Field(() => VersionsAvgAggregate, {nullable:true})
    _avg?: Identity<VersionsAvgAggregate>;

    @Field(() => VersionsSumAggregate, {nullable:true})
    _sum?: Identity<VersionsSumAggregate>;

    @Field(() => VersionsMinAggregate, {nullable:true})
    _min?: Identity<VersionsMinAggregate>;

    @Field(() => VersionsMaxAggregate, {nullable:true})
    _max?: Identity<VersionsMaxAggregate>;
}
