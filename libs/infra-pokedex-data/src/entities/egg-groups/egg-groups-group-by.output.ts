import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EggGroupsCountAggregate } from './egg-groups-count-aggregate.output';
import { EggGroupsAvgAggregate } from './egg-groups-avg-aggregate.output';
import { EggGroupsSumAggregate } from './egg-groups-sum-aggregate.output';
import { EggGroupsMinAggregate } from './egg-groups-min-aggregate.output';
import { EggGroupsMaxAggregate } from './egg-groups-max-aggregate.output';

@ObjectType()
export class EggGroupsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => EggGroupsCountAggregate, {nullable:true})
    _count?: EggGroupsCountAggregate;

    @Field(() => EggGroupsAvgAggregate, {nullable:true})
    _avg?: EggGroupsAvgAggregate;

    @Field(() => EggGroupsSumAggregate, {nullable:true})
    _sum?: EggGroupsSumAggregate;

    @Field(() => EggGroupsMinAggregate, {nullable:true})
    _min?: EggGroupsMinAggregate;

    @Field(() => EggGroupsMaxAggregate, {nullable:true})
    _max?: EggGroupsMaxAggregate;
}
