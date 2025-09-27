import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Natures } from '../natures/natures.model';
import { MoveBattleStyles } from '../move-battle-styles/move-battle-styles.model';

/**
 * @@TypeGraphQL.type(name: "NatureBattleStylePreference")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "NatureBattleStylePreference")'})
export class NatureBattleStylePreferences {

    @Field(() => ID, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => Natures, {nullable:false})
    nature?: Natures;

    @Field(() => MoveBattleStyles, {nullable:false})
    battleStyle?: MoveBattleStyles;
}
