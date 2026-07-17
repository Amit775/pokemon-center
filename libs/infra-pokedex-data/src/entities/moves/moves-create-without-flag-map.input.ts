import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
import { ContestCombosCreateNestedManyWithoutFirstMoveInput } from '../contest-combos/contest-combos-create-nested-many-without-first-move.input';
import { ContestCombosCreateNestedManyWithoutSecondMoveInput } from '../contest-combos/contest-combos-create-nested-many-without-second-move.input';
import { SuperContestCombosCreateNestedManyWithoutFirstMoveInput } from '../super-contest-combos/super-contest-combos-create-nested-many-without-first-move.input';
import { SuperContestCombosCreateNestedManyWithoutSecondMoveInput } from '../super-contest-combos/super-contest-combos-create-nested-many-without-second-move.input';
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-known-move.input';

@InputType()
export class MovesCreateWithoutFlagMapInput {

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
    generation!: Identity<GenerationsCreateNestedOneWithoutMovesInput>;

    @Field(() => TypesCreateNestedOneWithoutMovesInput, {nullable:false})
    type!: Identity<TypesCreateNestedOneWithoutMovesInput>;

    @Field(() => MoveTargetsCreateNestedOneWithoutMovesInput, {nullable:false})
    target!: Identity<MoveTargetsCreateNestedOneWithoutMovesInput>;

    @Field(() => MoveDamageClassesCreateNestedOneWithoutMovesInput, {nullable:false})
    damageClass!: Identity<MoveDamageClassesCreateNestedOneWithoutMovesInput>;

    @Field(() => ContestTypesCreateNestedOneWithoutMovesInput, {nullable:true})
    contestType?: Identity<ContestTypesCreateNestedOneWithoutMovesInput>;

    @Field(() => ContestEffectsCreateNestedOneWithoutMovesInput, {nullable:true})
    contestEffect?: Identity<ContestEffectsCreateNestedOneWithoutMovesInput>;

    @Field(() => SuperContestEffectsCreateNestedOneWithoutMovesInput, {nullable:true})
    superContestEffect?: Identity<SuperContestEffectsCreateNestedOneWithoutMovesInput>;

    @Field(() => PokemonMovesCreateNestedManyWithoutMoveInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesCreateNestedManyWithoutMoveInput>;

    @Field(() => MachinesCreateNestedManyWithoutMoveInput, {nullable:true})
    machines?: Identity<MachinesCreateNestedManyWithoutMoveInput>;

    @Field(() => MoveMetaCreateNestedManyWithoutMoveInput, {nullable:true})
    meta?: Identity<MoveMetaCreateNestedManyWithoutMoveInput>;

    @Field(() => ContestCombosCreateNestedManyWithoutFirstMoveInput, {nullable:true})
    contestCombos?: Identity<ContestCombosCreateNestedManyWithoutFirstMoveInput>;

    @Field(() => ContestCombosCreateNestedManyWithoutSecondMoveInput, {nullable:true})
    contestCombosSecond?: Identity<ContestCombosCreateNestedManyWithoutSecondMoveInput>;

    @Field(() => SuperContestCombosCreateNestedManyWithoutFirstMoveInput, {nullable:true})
    superContestCombos?: Identity<SuperContestCombosCreateNestedManyWithoutFirstMoveInput>;

    @Field(() => SuperContestCombosCreateNestedManyWithoutSecondMoveInput, {nullable:true})
    superContestCombosSecond?: Identity<SuperContestCombosCreateNestedManyWithoutSecondMoveInput>;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutKnownMoveInput, {nullable:true})
    knownMoves?: Identity<PokemonEvolutionCreateNestedManyWithoutKnownMoveInput>;
}
