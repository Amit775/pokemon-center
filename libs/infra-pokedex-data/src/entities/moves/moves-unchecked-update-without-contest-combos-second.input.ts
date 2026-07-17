import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-move-nested.input';
import { MachinesUncheckedUpdateManyWithoutMoveNestedInput } from '../machines/machines-unchecked-update-many-without-move-nested.input';
import { MoveMetaUncheckedUpdateManyWithoutMoveNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-move-nested.input';
import { MoveFlagMapUncheckedUpdateManyWithoutMoveNestedInput } from '../move-flag-map/move-flag-map-unchecked-update-many-without-move-nested.input';
import { ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput } from '../contest-combos/contest-combos-unchecked-update-many-without-first-move-nested.input';
import { SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many-without-first-move-nested.input';
import { SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many-without-second-move-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-known-move-nested.input';

@InputType()
export class MovesUncheckedUpdateWithoutContestCombosSecondInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    generation_id?: number;

    @Field(() => Int, {nullable:true})
    type_id?: number;

    @Field(() => Int, {nullable:true})
    power?: number;

    @Field(() => Int, {nullable:true})
    pp?: number;

    @Field(() => Int, {nullable:true})
    accuracy?: number;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => Int, {nullable:true})
    target_id?: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => Int, {nullable:true})
    effect_id?: number;

    @Field(() => Int, {nullable:true})
    effect_chance?: number;

    @Field(() => Int, {nullable:true})
    contest_type_id?: number;

    @Field(() => Int, {nullable:true})
    contest_effect_id?: number;

    @Field(() => Int, {nullable:true})
    super_contest_effect_id?: number;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput>;

    @Field(() => MachinesUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    machines?: Identity<MachinesUncheckedUpdateManyWithoutMoveNestedInput>;

    @Field(() => MoveMetaUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUncheckedUpdateManyWithoutMoveNestedInput>;

    @Field(() => MoveFlagMapUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    flagMap?: Identity<MoveFlagMapUncheckedUpdateManyWithoutMoveNestedInput>;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    contestCombos?: Identity<ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput>;

    @Field(() => SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    superContestCombos?: Identity<SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput>;

    @Field(() => SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    superContestCombosSecond?: Identity<SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput>;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput, {nullable:true})
    knownMoves?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput>;
}
