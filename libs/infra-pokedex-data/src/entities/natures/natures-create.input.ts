import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatsCreateNestedOneWithoutNaturesDecreasedInput } from '../stats/stats-create-nested-one-without-natures-decreased.input';
import { StatsCreateNestedOneWithoutNaturesIncreasedInput } from '../stats/stats-create-nested-one-without-natures-increased.input';
import { NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create-nested-many-without-nature.input';

@InputType()
export class NaturesCreateInput {

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
    decreasedStat!: StatsCreateNestedOneWithoutNaturesDecreasedInput;

    @Field(() => StatsCreateNestedOneWithoutNaturesIncreasedInput, {nullable:false})
    increasedStat!: StatsCreateNestedOneWithoutNaturesIncreasedInput;

    @Field(() => NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput, {nullable:true})
    battleStylePreferences?: NatureBattleStylePreferencesCreateNestedManyWithoutNatureInput;
}
