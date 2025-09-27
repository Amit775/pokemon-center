import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsCountAggregate } from './stats-count-aggregate.output';
import { StatsAvgAggregate } from './stats-avg-aggregate.output';
import { StatsSumAggregate } from './stats-sum-aggregate.output';
import { StatsMinAggregate } from './stats-min-aggregate.output';
import { StatsMaxAggregate } from './stats-max-aggregate.output';

@ObjectType()
export class StatsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => StatsCountAggregate, {nullable:true})
    _count?: StatsCountAggregate;

    @Field(() => StatsAvgAggregate, {nullable:true})
    _avg?: StatsAvgAggregate;

    @Field(() => StatsSumAggregate, {nullable:true})
    _sum?: StatsSumAggregate;

    @Field(() => StatsMinAggregate, {nullable:true})
    _min?: StatsMinAggregate;

    @Field(() => StatsMaxAggregate, {nullable:true})
    _max?: StatsMaxAggregate;
}
