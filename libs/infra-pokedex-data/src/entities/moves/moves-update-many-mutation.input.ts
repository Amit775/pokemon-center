import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MovesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    power?: number;

    @Field(() => Int, {nullable:true})
    pp?: number;

    @Field(() => Int, {nullable:true})
    accuracy?: number;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => Int, {nullable:true})
    effect_id?: number;

    @Field(() => Int, {nullable:true})
    effect_chance?: number;
}
