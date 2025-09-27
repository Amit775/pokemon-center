import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NatureBattleStylePreferencesMinAggregate {

    @Field(() => Int, {nullable:true})
    nature_id?: number;

    @Field(() => Int, {nullable:true})
    move_battle_style_id?: number;

    @Field(() => Int, {nullable:true})
    low_hp_preference?: number;

    @Field(() => Int, {nullable:true})
    high_hp_preference?: number;
}
