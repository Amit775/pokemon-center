import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateNestedOneWithoutNaturesDecreasedInput } from '../stats/stats-create-nested-one-without-natures-decreased.input';
import { NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create-nested-many-without-nature.input';

@InputType()
export class NaturesCreateWithoutIncreasedStatInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => StatsCreateNestedOneWithoutNaturesDecreasedInput, {nullable:false})
    decreasedStat!: Identity<StatsCreateNestedOneWithoutNaturesDecreasedInput>;

    @Field(() => NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput, {nullable:true})
    battleStylePreferences?: Identity<NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput>;
}
