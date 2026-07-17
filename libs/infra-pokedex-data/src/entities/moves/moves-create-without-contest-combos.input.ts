import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutMovesInput } from '../generations/generations-create-nested-one-without-moves.input';
import { TypesCreateNestedOneWithoutMovesInput } from '../types/types-create-nested-one-without-moves.input';
import { MoveTargetsCreateNestedOneWithoutMovesInput } from '../move-targets/move-targets-create-nested-one-without-moves.input';
import { MoveDamageClassesCreateNestedOneWithoutMovesInput } from '../move-damage-classes/move-damage-classes-create-nested-one-without-moves.input';
import { ContestTypesCreateNestedOneWithoutMovesInput } from '../contest-types/contest-types-create-nested-one-without-moves.input';
import { ContestEffectsCreateNestedOneWithoutMovesInput } from '../contest-effects/contest-effects-create-nested-one-without-moves.input';
import { SuperContestEffectsCreateNestedOneWithoutMovesInput } from '../super-contest-effects/super-contest-effects-create-nested-one-without-moves.input';
import { PokemonMovesCreateNestedManyWithoutMoveInput } from '../pokemon-moves/pokemon-moves-create-nested-many-without-move.input';
import { MachinesCreateNestedManyWithoutMoveInput } from '../machines/machines-create-nested-many-without-move.input';
import { MoveMetaCreateNestedManyWithoutMoveInput } from '../move-meta/move-meta-create-nested-many-without-move.input';
import { MoveFlagMapCreateNestedManyWithoutMoveInput } from '../move-flag-map/move-flag-map-create-nested-many-without-move.input';
import { ContestCombosCreateNestedManyWithoutSecondMoveInput } from '../contest-combos/contest-combos-create-nested-many-without-second-move.input';
import { SuperContestCombosCreateNestedManyWithoutFirstMoveInput } from '../super-contest-combos/super-contest-combos-create-nested-many-without-first-move.input';
import { SuperContestCombosCreateNestedManyWithoutSecondMoveInput } from '../super-contest-combos/super-contest-combos-create-nested-many-without-second-move.input';
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-known-move.input';

@InputType()
export class MovesCreateWithoutContestCombosInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:true})
    power?: number;

    @Field(() => Int, {nullable:true})
    pp?: number;

    @Field(() => Int, {nullable:true})
    accuracy?: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:true})
    effect_id?: number;

    @Field(() => Int, {nullable:true})
    effect_chance?: number;

    @Field(() => GenerationsCreateNestedOneWithoutMovesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutMovesInput;

    @Field(() => TypesCreateNestedOneWithoutMovesInput, {nullable:false})
    type!: TypesCreateNestedOneWithoutMovesInput;

    @Field(() => MoveTargetsCreateNestedOneWithoutMovesInput, {nullable:false})
    target!: MoveTargetsCreateNestedOneWithoutMovesInput;

    @Field(() => MoveDamageClassesCreateNestedOneWithoutMovesInput, {nullable:false})
    damageClass!: MoveDamageClassesCreateNestedOneWithoutMovesInput;

    @Field(() => ContestTypesCreateNestedOneWithoutMovesInput, {nullable:true})
    contestType?: ContestTypesCreateNestedOneWithoutMovesInput;

    @Field(() => ContestEffectsCreateNestedOneWithoutMovesInput, {nullable:true})
    contestEffect?: ContestEffectsCreateNestedOneWithoutMovesInput;

    @Field(() => SuperContestEffectsCreateNestedOneWithoutMovesInput, {nullable:true})
    superContestEffect?: SuperContestEffectsCreateNestedOneWithoutMovesInput;

    @Field(() => PokemonMovesCreateNestedManyWithoutMoveInput, {nullable:true})
    pokemonMoves?: PokemonMovesCreateNestedManyWithoutMoveInput;

    @Field(() => MachinesCreateNestedManyWithoutMoveInput, {nullable:true})
    machines?: MachinesCreateNestedManyWithoutMoveInput;

    @Field(() => MoveMetaCreateNestedManyWithoutMoveInput, {nullable:true})
    meta?: MoveMetaCreateNestedManyWithoutMoveInput;

    @Field(() => MoveFlagMapCreateNestedManyWithoutMoveInput, {nullable:true})
    flagMap?: MoveFlagMapCreateNestedManyWithoutMoveInput;

    @Field(() => ContestCombosCreateNestedManyWithoutSecondMoveInput, {nullable:true})
    contestCombosSecond?: ContestCombosCreateNestedManyWithoutSecondMoveInput;

    @Field(() => SuperContestCombosCreateNestedManyWithoutFirstMoveInput, {nullable:true})
    superContestCombos?: SuperContestCombosCreateNestedManyWithoutFirstMoveInput;

    @Field(() => SuperContestCombosCreateNestedManyWithoutSecondMoveInput, {nullable:true})
    superContestCombosSecond?: SuperContestCombosCreateNestedManyWithoutSecondMoveInput;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutKnownMoveInput, {nullable:true})
    knownMoves?: PokemonEvolutionCreateNestedManyWithoutKnownMoveInput;
}
