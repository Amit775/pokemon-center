import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GenerationsUpdateOneRequiredWithoutMovesNestedInput } from '../generations/generations-update-one-required-without-moves-nested.input';
import { TypesUpdateOneRequiredWithoutMovesNestedInput } from '../types/types-update-one-required-without-moves-nested.input';
import { MoveTargetsUpdateOneRequiredWithoutMovesNestedInput } from '../move-targets/move-targets-update-one-required-without-moves-nested.input';
import { MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput } from '../move-damage-classes/move-damage-classes-update-one-required-without-moves-nested.input';
import { ContestTypesUpdateOneWithoutMovesNestedInput } from '../contest-types/contest-types-update-one-without-moves-nested.input';
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
export class MovesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    pp?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    accuracy?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priority?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_chance?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    generation?: GenerationsUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => TypesUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    type?: TypesUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => MoveTargetsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    target?: MoveTargetsUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    damageClass?: MoveDamageClassesUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => ContestTypesUpdateOneWithoutMovesNestedInput, {nullable:true})
    contestType?: ContestTypesUpdateOneWithoutMovesNestedInput;

    @Field(() => ContestEffectsUpdateOneWithoutMovesNestedInput, {nullable:true})
    contestEffect?: ContestEffectsUpdateOneWithoutMovesNestedInput;

    @Field(() => SuperContestEffectsUpdateOneWithoutMovesNestedInput, {nullable:true})
    superContestEffect?: SuperContestEffectsUpdateOneWithoutMovesNestedInput;

    @Field(() => PokemonMovesUpdateManyWithoutMoveNestedInput, {nullable:true})
    pokemonMoves?: PokemonMovesUpdateManyWithoutMoveNestedInput;

    @Field(() => MachinesUpdateManyWithoutMoveNestedInput, {nullable:true})
    machines?: MachinesUpdateManyWithoutMoveNestedInput;

    @Field(() => MoveMetaUpdateManyWithoutMoveNestedInput, {nullable:true})
    meta?: MoveMetaUpdateManyWithoutMoveNestedInput;

    @Field(() => MoveFlagMapUpdateManyWithoutMoveNestedInput, {nullable:true})
    flagMap?: MoveFlagMapUpdateManyWithoutMoveNestedInput;

    @Field(() => ContestCombosUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    contestCombos?: ContestCombosUpdateManyWithoutFirstMoveNestedInput;

    @Field(() => ContestCombosUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    contestCombosSecond?: ContestCombosUpdateManyWithoutSecondMoveNestedInput;

    @Field(() => SuperContestCombosUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    superContestCombos?: SuperContestCombosUpdateManyWithoutFirstMoveNestedInput;

    @Field(() => SuperContestCombosUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    superContestCombosSecond?: SuperContestCombosUpdateManyWithoutSecondMoveNestedInput;

    @Field(() => PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput, {nullable:true})
    knownMoves?: PokemonEvolutionUpdateManyWithoutKnownMoveNestedInput;
}
