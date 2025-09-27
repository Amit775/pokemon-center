import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveFlagMapCountAggregate } from './move-flag-map-count-aggregate.output';
import { MoveFlagMapAvgAggregate } from './move-flag-map-avg-aggregate.output';
import { MoveFlagMapSumAggregate } from './move-flag-map-sum-aggregate.output';
import { MoveFlagMapMinAggregate } from './move-flag-map-min-aggregate.output';
import { MoveFlagMapMaxAggregate } from './move-flag-map-max-aggregate.output';

@ObjectType()
export class MoveFlagMapGroupBy {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => MoveFlagMapCountAggregate, {nullable:true})
    _count?: MoveFlagMapCountAggregate;

    @Field(() => MoveFlagMapAvgAggregate, {nullable:true})
    _avg?: MoveFlagMapAvgAggregate;

    @Field(() => MoveFlagMapSumAggregate, {nullable:true})
    _sum?: MoveFlagMapSumAggregate;

    @Field(() => MoveFlagMapMinAggregate, {nullable:true})
    _min?: MoveFlagMapMinAggregate;

    @Field(() => MoveFlagMapMaxAggregate, {nullable:true})
    _max?: MoveFlagMapMaxAggregate;
}
