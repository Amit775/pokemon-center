import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VersionsCountAggregate } from './versions-count-aggregate.output';
import { VersionsAvgAggregate } from './versions-avg-aggregate.output';
import { VersionsSumAggregate } from './versions-sum-aggregate.output';
import { VersionsMinAggregate } from './versions-min-aggregate.output';
import { VersionsMaxAggregate } from './versions-max-aggregate.output';

@ObjectType()
export class AggregateVersions {

    @Field(() => VersionsCountAggregate, {nullable:true})
    _count?: VersionsCountAggregate;

    @Field(() => VersionsAvgAggregate, {nullable:true})
    _avg?: VersionsAvgAggregate;

    @Field(() => VersionsSumAggregate, {nullable:true})
    _sum?: VersionsSumAggregate;

    @Field(() => VersionsMinAggregate, {nullable:true})
    _min?: VersionsMinAggregate;

    @Field(() => VersionsMaxAggregate, {nullable:true})
    _max?: VersionsMaxAggregate;
}
