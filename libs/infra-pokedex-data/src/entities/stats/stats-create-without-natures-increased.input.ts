import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsCreateNestedManyWithoutStatInput } from '../pokemon-stats/pokemon-stats-create-nested-many-without-stat.input';
import { MoveMetaStatChangesCreateNestedManyWithoutStatInput } from '../move-meta-stat-changes/move-meta-stat-changes-create-nested-many-without-stat.input';
import { CharacteristicsCreateNestedManyWithoutStatInput } from '../characteristics/characteristics-create-nested-many-without-stat.input';
import { NaturesCreateNestedManyWithoutDecreasedStatInput } from '../natures/natures-create-nested-many-without-decreased-stat.input';

@InputType()
export class StatsCreateWithoutNaturesIncreasedInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonStatsCreateNestedManyWithoutStatInput, {nullable:true})
    pokemonStats?: Identity<PokemonStatsCreateNestedManyWithoutStatInput>;

    @Field(() => MoveMetaStatChangesCreateNestedManyWithoutStatInput, {nullable:true})
    moveMetaStatChanges?: Identity<MoveMetaStatChangesCreateNestedManyWithoutStatInput>;

    @Field(() => CharacteristicsCreateNestedManyWithoutStatInput, {nullable:true})
    characteristics?: Identity<CharacteristicsCreateNestedManyWithoutStatInput>;

    @Field(() => NaturesCreateNestedManyWithoutDecreasedStatInput, {nullable:true})
    naturesDecreased?: Identity<NaturesCreateNestedManyWithoutDecreasedStatInput>;
}
