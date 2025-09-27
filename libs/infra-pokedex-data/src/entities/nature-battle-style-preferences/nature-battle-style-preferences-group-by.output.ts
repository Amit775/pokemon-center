import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCountAggregate } from './nature-battle-style-preferences-count-aggregate.output';
import { NatureBattleStylePreferencesAvgAggregate } from './nature-battle-style-preferences-avg-aggregate.output';
import { NatureBattleStylePreferencesSumAggregate } from './nature-battle-style-preferences-sum-aggregate.output';
import { NatureBattleStylePreferencesMinAggregate } from './nature-battle-style-preferences-min-aggregate.output';
import { NatureBattleStylePreferencesMaxAggregate } from './nature-battle-style-preferences-max-aggregate.output';

@ObjectType()
export class NatureBattleStylePreferencesGroupBy {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;

    @Field(() => NatureBattleStylePreferencesCountAggregate, {nullable:true})
    _count?: NatureBattleStylePreferencesCountAggregate;

    @Field(() => NatureBattleStylePreferencesAvgAggregate, {nullable:true})
    _avg?: NatureBattleStylePreferencesAvgAggregate;

    @Field(() => NatureBattleStylePreferencesSumAggregate, {nullable:true})
    _sum?: NatureBattleStylePreferencesSumAggregate;

    @Field(() => NatureBattleStylePreferencesMinAggregate, {nullable:true})
    _min?: NatureBattleStylePreferencesMinAggregate;

    @Field(() => NatureBattleStylePreferencesMaxAggregate, {nullable:true})
    _max?: NatureBattleStylePreferencesMaxAggregate;
}
