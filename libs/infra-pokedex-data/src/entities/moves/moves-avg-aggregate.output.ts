import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MovesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    generation_id?: number;

    @Field(() => Float, {nullable:true})
    type_id?: number;

    @Field(() => Float, {nullable:true})
    power?: number;

    @Field(() => Float, {nullable:true})
    pp?: number;

    @Field(() => Float, {nullable:true})
    accuracy?: number;

    @Field(() => Float, {nullable:true})
    priority?: number;

    @Field(() => Float, {nullable:true})
    target_id?: number;

    @Field(() => Float, {nullable:true})
    damage_class_id?: number;

    @Field(() => Float, {nullable:true})
    effect_id?: number;

    @Field(() => Float, {nullable:true})
    effect_chance?: number;

    @Field(() => Float, {nullable:true})
    contest_type_id?: number;

    @Field(() => Float, {nullable:true})
    contest_effect_id?: number;

    @Field(() => Float, {nullable:true})
    super_contest_effect_id?: number;
}
