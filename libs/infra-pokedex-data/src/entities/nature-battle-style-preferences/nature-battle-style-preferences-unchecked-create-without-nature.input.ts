import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NatureBattleStylePreferencesUncheckedCreateWithoutNatureInput {

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;
}
