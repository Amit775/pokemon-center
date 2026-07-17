import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsUpdateManyWithoutStatNestedInput } from '../pokemon-stats/pokemon-stats-update-many-without-stat-nested.input';
import { MoveMetaStatChangesUpdateManyWithoutStatNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-update-many-without-stat-nested.input';
import { NaturesUpdateManyWithoutDecreasedStatNestedInput } from '../natures/natures-update-many-without-decreased-stat-nested.input';
import { NaturesUpdateManyWithoutIncreasedStatNestedInput } from '../natures/natures-update-many-without-increased-stat-nested.input';

@InputType()
export class StatsUpdateWithoutCharacteristicsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_battle_only?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonStatsUpdateManyWithoutStatNestedInput, {nullable:true})
    pokemonStats?: Identity<PokemonStatsUpdateManyWithoutStatNestedInput>;

    @Field(() => MoveMetaStatChangesUpdateManyWithoutStatNestedInput, {nullable:true})
    moveMetaStatChanges?: Identity<MoveMetaStatChangesUpdateManyWithoutStatNestedInput>;

    @Field(() => NaturesUpdateManyWithoutDecreasedStatNestedInput, {nullable:true})
    naturesDecreased?: Identity<NaturesUpdateManyWithoutDecreasedStatNestedInput>;

    @Field(() => NaturesUpdateManyWithoutIncreasedStatNestedInput, {nullable:true})
    naturesIncreased?: Identity<NaturesUpdateManyWithoutIncreasedStatNestedInput>;
}
