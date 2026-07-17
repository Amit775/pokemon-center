import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NatureBattleStylePreferencesAvgAggregate {

    @Field(() => Float, {nullable:true})
    nature_id?: number;

    @Field(() => Float, {nullable:true})
    move_battle_style_id?: number;

    @Field(() => Float, {nullable:true})
    low_hp_preference?: number;

    @Field(() => Float, {nullable:true})
    high_hp_preference?: number;
}
