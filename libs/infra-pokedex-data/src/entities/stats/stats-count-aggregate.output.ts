import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StatsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    damage_class_id!: number;

    @Field(() => Int, {nullable:false})
    identifier!: number;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
