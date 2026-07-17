import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MovesCreateManyDamageClassInput {

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
}
