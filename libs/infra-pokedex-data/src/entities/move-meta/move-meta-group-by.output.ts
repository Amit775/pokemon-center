import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveMetaCountAggregate } from './move-meta-count-aggregate.output';
import { MoveMetaAvgAggregate } from './move-meta-avg-aggregate.output';
import { MoveMetaSumAggregate } from './move-meta-sum-aggregate.output';
import { MoveMetaMinAggregate } from './move-meta-min-aggregate.output';
import { MoveMetaMaxAggregate } from './move-meta-max-aggregate.output';

@ObjectType()
export class MoveMetaGroupBy {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    meta_category_id!: number;

    @Field(() => Int, {nullable:true})
    meta_ailment_id?: number;

    @Field(() => Int, {nullable:true})
    min_hits?: number;

    @Field(() => Int, {nullable:true})
    max_hits?: number;

    @Field(() => Int, {nullable:true})
    min_turns?: number;

    @Field(() => Int, {nullable:true})
    max_turns?: number;

    @Field(() => Int, {nullable:false})
    drain!: number;

    @Field(() => Int, {nullable:false})
    healing!: number;

    @Field(() => Int, {nullable:false})
    crit_rate!: number;

    @Field(() => Int, {nullable:false})
    ailment_chance!: number;

    @Field(() => Int, {nullable:false})
    flinch_chance!: number;

    @Field(() => Int, {nullable:false})
    stat_chance!: number;

    @Field(() => MoveMetaCountAggregate, {nullable:true})
    _count?: MoveMetaCountAggregate;

    @Field(() => MoveMetaAvgAggregate, {nullable:true})
    _avg?: MoveMetaAvgAggregate;

    @Field(() => MoveMetaSumAggregate, {nullable:true})
    _sum?: MoveMetaSumAggregate;

    @Field(() => MoveMetaMinAggregate, {nullable:true})
    _min?: MoveMetaMinAggregate;

    @Field(() => MoveMetaMaxAggregate, {nullable:true})
    _max?: MoveMetaMaxAggregate;
}
