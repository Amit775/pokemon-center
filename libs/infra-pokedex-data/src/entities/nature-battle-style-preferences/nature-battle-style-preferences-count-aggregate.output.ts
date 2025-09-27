import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NatureBattleStylePreferencesCountAggregate {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
