import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsUncheckedUpdateManyWithoutStatNestedInput } from '../pokemon-stats/pokemon-stats-unchecked-update-many-without-stat-nested.input';
import { MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-update-many-without-stat-nested.input';
import { NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput } from '../natures/natures-unchecked-update-many-without-decreased-stat-nested.input';
import { NaturesUncheckedUpdateManyWithoutIncreasedStatNestedInput } from '../natures/natures-unchecked-update-many-without-increased-stat-nested.input';

@InputType()
export class StatsUncheckedUpdateWithoutCharacteristicsInput {

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

    @Field(() => PokemonStatsUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    pokemonStats?: Identity<PokemonStatsUncheckedUpdateManyWithoutStatNestedInput>;

    @Field(() => MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    moveMetaStatChanges?: Identity<MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput>;

    @Field(() => NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput, {nullable:true})
    naturesDecreased?: Identity<NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput>;

    @Field(() => NaturesUncheckedUpdateManyWithoutIncreasedStatNestedInput, {nullable:true})
    naturesIncreased?: Identity<NaturesUncheckedUpdateManyWithoutIncreasedStatNestedInput>;
}
