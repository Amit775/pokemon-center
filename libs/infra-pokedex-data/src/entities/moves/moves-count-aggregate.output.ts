import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MovesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    identifier!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    power!: number;

    @Field(() => Int, {nullable:false})
    pp!: number;

    @Field(() => Int, {nullable:false})
    accuracy!: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    target_id!: number;

    @Field(() => Int, {nullable:false})
    damage_class_id!: number;

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => Int, {nullable:false})
    effect_chance!: number;

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    super_contest_effect_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
