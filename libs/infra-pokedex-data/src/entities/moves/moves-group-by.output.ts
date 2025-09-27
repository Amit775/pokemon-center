import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesCountAggregate } from './moves-count-aggregate.output';
import { MovesAvgAggregate } from './moves-avg-aggregate.output';
import { MovesSumAggregate } from './moves-sum-aggregate.output';
import { MovesMinAggregate } from './moves-min-aggregate.output';
import { MovesMaxAggregate } from './moves-max-aggregate.output';

@ObjectType()
export class MovesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:true})
    power?: number;

    @Field(() => Int, {nullable:true})
    pp?: number;

    @Field(() => Int, {nullable:true})
    accuracy?: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    target_id!: number;

    @Field(() => Int, {nullable:false})
    damage_class_id!: number;

    @Field(() => Int, {nullable:true})
    effect_id?: number;

    @Field(() => Int, {nullable:true})
    effect_chance?: number;

    @Field(() => Int, {nullable:true})
    contest_type_id?: number;

    @Field(() => Int, {nullable:true})
    contest_effect_id?: number;

    @Field(() => Int, {nullable:true})
    super_contest_effect_id?: number;

    @Field(() => MovesCountAggregate, {nullable:true})
    _count?: MovesCountAggregate;

    @Field(() => MovesAvgAggregate, {nullable:true})
    _avg?: MovesAvgAggregate;

    @Field(() => MovesSumAggregate, {nullable:true})
    _sum?: MovesSumAggregate;

    @Field(() => MovesMinAggregate, {nullable:true})
    _min?: MovesMinAggregate;

    @Field(() => MovesMaxAggregate, {nullable:true})
    _max?: MovesMaxAggregate;
}
