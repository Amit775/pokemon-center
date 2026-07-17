import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutMovesNestedInput } from '../generations/generations-update-one-required-without-moves-nested.input';
import { TypesUpdateOneRequiredWithoutMovesNestedInput } from '../types/types-update-one-required-without-moves-nested.input';
import { MoveTargetsUpdateOneRequiredWithoutMovesNestedInput } from '../move-targets/move-targets-update-one-required-without-moves-nested.input';
import { MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput } from '../move-damage-classes/move-damage-classes-update-one-required-without-moves-nested.input';
import { ContestEffectsUpdateOneWithoutMovesNestedInput } from '../contest-effects/contest-effects-update-one-without-moves-nested.input';
import { SuperContestEffectsUpdateOneWithoutMovesNestedInput } from '../super-contest-effects/super-contest-effects-update-one-without-moves-nested.input';
import { PokemonMovesUpdateManyWithoutMoveNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-move-nested.input';
import { MachinesUpdateManyWithoutMoveNestedInput } from '../machines/machines-update-many-without-move-nested.input';
import { MoveMetaUpdateManyWithoutMoveNestedInput } from '../move-meta/move-meta-update-many-without-move-nested.input';
import { MoveFlagMapUpdateManyWithoutMoveNestedInput } from '../move-flag-map/move-flag-map-update-many-without-move-nested.input';
import { ContestCombosUpdateManyWithoutFirstMoveNestedInput } from '../contest-combos/contest-combos-update-many-without-first-move-nested.input';
import { ContestCombosUpdateManyWithoutSecondMoveNestedInput } from '../contest-combos/contest-combos-update-many-without-second-move-nested.input';
import { SuperContestCombosUpdateManyWithoutFirstMoveNestedInput } from '../super-contest-combos/super-contest-combos-update-many-without-first-move-nested.input';
import { SuperContestCombosUpdateManyWithoutSecondMoveNestedInput } from '../super-contest-combos/super-contest-combos-update-many-without-second-move-nested.input';
import { PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-known-move-nested.input';

@InputType()
export class MovesUpdateWithoutContestTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    power?: number;

    @Field(() => Int, {nullable:true})
    pp?: number;

    @Field(() => Int, {nullable:true})
    accuracy?: number;

    @Field(() => Int, {nullable:true})
    priority?: number;

    @Field(() => Int, {nullable:true})
    effect_id?: number;

    @Field(() => Int, {nullable:true})
    effect_chance?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutMovesNestedInput>;

    @Field(() => TypesUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutMovesNestedInput>;

    @Field(() => MoveTargetsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    target?: Identity<MoveTargetsUpdateOneRequiredWithoutMovesNestedInput>;

    @Field(() => MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    damageClass?: Identity<MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput>;

    @Field(() => ContestEffectsUpdateOneWithoutMovesNestedInput, {nullable:true})
    contestEffect?: Identity<ContestEffectsUpdateOneWithoutMovesNestedInput>;

    @Field(() => SuperContestEffectsUpdateOneWithoutMovesNestedInput, {nullable:true})
    superContestEffect?: Identity<SuperContestEffectsUpdateOneWithoutMovesNestedInput>;

    @Field(() => PokemonMovesUpdateManyWithoutMoveNestedInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUpdateManyWithoutMoveNestedInput>;

    @Field(() => MachinesUpdateManyWithoutMoveNestedInput, {nullable:true})
    machines?: Identity<MachinesUpdateManyWithoutMoveNestedInput>;

    @Field(() => MoveMetaUpdateManyWithoutMoveNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUpdateManyWithoutMoveNestedInput>;

    @Field(() => MoveFlagMapUpdateManyWithoutMoveNestedInput, {nullable:true})
    flagMap?: Identity<MoveFlagMapUpdateManyWithoutMoveNestedInput>;

    @Field(() => ContestCombosUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    contestCombos?: Identity<ContestCombosUpdateManyWithoutFirstMoveNestedInput>;

    @Field(() => ContestCombosUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    contestCombosSecond?: Identity<ContestCombosUpdateManyWithoutSecondMoveNestedInput>;

    @Field(() => SuperContestCombosUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    superContestCombos?: Identity<SuperContestCombosUpdateManyWithoutFirstMoveNestedInput>;

    @Field(() => SuperContestCombosUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    superContestCombosSecond?: Identity<SuperContestCombosUpdateManyWithoutSecondMoveNestedInput>;

    @Field(() => PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput, {nullable:true})
    knownMoves?: Identity<PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput>;
}
