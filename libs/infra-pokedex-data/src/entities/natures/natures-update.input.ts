import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateOneRequiredWithoutNaturesDecreasedNestedInput } from '../stats/stats-update-one-required-without-natures-decreased-nested.input';
import { StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput } from '../stats/stats-update-one-required-without-natures-increased-nested.input';
import { NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update-many-without-nature-nested.input';

@InputType()
export class NaturesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    hates_flavor_id?: number;

    @Field(() => Int, {nullable:true})
    likes_flavor_id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => StatsUpdateOneRequiredWithoutNaturesDecreasedNestedInput, {nullable:true})
    decreasedStat?: Identity<StatsUpdateOneRequiredWithoutNaturesDecreasedNestedInput>;

    @Field(() => StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput, {nullable:true})
    increasedStat?: Identity<StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput>;

    @Field(() => NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput, {nullable:true})
    battleStylePreferences?: Identity<NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput>;
}
