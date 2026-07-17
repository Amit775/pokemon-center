import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesUncheckedCreateNestedManyWithoutMoveInput } from '../pokemon-moves/pokemon-moves-unchecked-create-nested-many-without-move.input';
import { MachinesUncheckedCreateNestedManyWithoutMoveInput } from '../machines/machines-unchecked-create-nested-many-without-move.input';
import { MoveMetaUncheckedCreateNestedManyWithoutMoveInput } from '../move-meta/move-meta-unchecked-create-nested-many-without-move.input';
import { MoveFlagMapUncheckedCreateNestedManyWithoutMoveInput } from '../move-flag-map/move-flag-map-unchecked-create-nested-many-without-move.input';
import { ContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput } from '../contest-combos/contest-combos-unchecked-create-nested-many-without-first-move.input';
import { ContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput } from '../contest-combos/contest-combos-unchecked-create-nested-many-without-second-move.input';
import { SuperContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput } from '../super-contest-combos/super-contest-combos-unchecked-create-nested-many-without-first-move.input';
import { SuperContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput } from '../super-contest-combos/super-contest-combos-unchecked-create-nested-many-without-second-move.input';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-known-move.input';

@InputType()
export class MovesUncheckedCreateWithoutDamageClassInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:true})
    power?: number;

    @Field(() => Int, {nullable:true})
    pp?: number;

    @Field(() => Int, {nullable:true})
    accuracy?: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    target_id!: number;

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

    @Field(() => PokemonMovesUncheckedCreateNestedManyWithoutMoveInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUncheckedCreateNestedManyWithoutMoveInput>;

    @Field(() => MachinesUncheckedCreateNestedManyWithoutMoveInput, {nullable:true})
    machines?: Identity<MachinesUncheckedCreateNestedManyWithoutMoveInput>;

    @Field(() => MoveMetaUncheckedCreateNestedManyWithoutMoveInput, {nullable:true})
    meta?: Identity<MoveMetaUncheckedCreateNestedManyWithoutMoveInput>;

    @Field(() => MoveFlagMapUncheckedCreateNestedManyWithoutMoveInput, {nullable:true})
    flagMap?: Identity<MoveFlagMapUncheckedCreateNestedManyWithoutMoveInput>;

    @Field(() => ContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput, {nullable:true})
    contestCombos?: Identity<ContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput>;

    @Field(() => ContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput, {nullable:true})
    contestCombosSecond?: Identity<ContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput>;

    @Field(() => SuperContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput, {nullable:true})
    superContestCombos?: Identity<SuperContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput>;

    @Field(() => SuperContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput, {nullable:true})
    superContestCombosSecond?: Identity<SuperContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput>;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveInput, {nullable:true})
    knownMoves?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutKnownMoveInput>;
}
