import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class StatsCreateManyInput {

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
}
