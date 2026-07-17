import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-move-nested.input';
import { MachinesUncheckedUpdateManyWithoutMoveNestedInput } from '../machines/machines-unchecked-update-many-without-move-nested.input';
import { MoveMetaUncheckedUpdateManyWithoutMoveNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-move-nested.input';
import { MoveFlagMapUncheckedUpdateManyWithoutMoveNestedInput } from '../move-flag-map/move-flag-map-unchecked-update-many-without-move-nested.input';
import { ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput } from '../contest-combos/contest-combos-unchecked-update-many-without-first-move-nested.input';
import { ContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput } from '../contest-combos/contest-combos-unchecked-update-many-without-second-move-nested.input';
import { SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many-without-first-move-nested.input';
import { SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many-without-second-move-nested.input';
import { PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-known-move-nested.input';

@InputType()
export class MovesUncheckedUpdateWithoutTargetInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    type_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    pp?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    accuracy?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priority?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_class_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_chance?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    contest_type_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    contest_effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    super_contest_effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    pokemonMoves?: PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput;

    @Field(() => MachinesUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    machines?: MachinesUncheckedUpdateManyWithoutMoveNestedInput;

    @Field(() => MoveMetaUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    meta?: MoveMetaUncheckedUpdateManyWithoutMoveNestedInput;

    @Field(() => MoveFlagMapUncheckedUpdateManyWithoutMoveNestedInput, {nullable:true})
    flagMap?: MoveFlagMapUncheckedUpdateManyWithoutMoveNestedInput;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    contestCombos?: ContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    contestCombosSecond?: ContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput;

    @Field(() => SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput, {nullable:true})
    superContestCombos?: SuperContestCombosUncheckedUpdateManyWithoutFirstMoveNestedInput;

    @Field(() => SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput, {nullable:true})
    superContestCombosSecond?: SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput, {nullable:true})
    knownMoves?: PokemonEvolutionUncheckedUpdateManyWithoutKnownMoveNestedInput;
}
