import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
import { Types } from '../types/types.model';
import { MoveTargets } from '../move-targets/move-targets.model';
import { MoveDamageClasses } from '../move-damage-classes/move-damage-classes.model';
import { ContestTypes } from '../contest-types/contest-types.model';
import { ContestEffects } from '../contest-effects/contest-effects.model';
import { SuperContestEffects } from '../super-contest-effects/super-contest-effects.model';
import { PokemonMoves } from '../pokemon-moves/pokemon-moves.model';
import { Machines } from '../machines/machines.model';
import { MoveMeta } from '../move-meta/move-meta.model';
import { MoveFlagMap } from '../move-flag-map/move-flag-map.model';
import { ContestCombos } from '../contest-combos/contest-combos.model';
import { SuperContestCombos } from '../super-contest-combos/super-contest-combos.model';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { MovesCount } from './moves-count.output';

/**
 * @@TypeGraphQL.type(name: "Move")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Move")'})
export class Moves {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:true})
    power!: number | null;

    @Field(() => Int, {nullable:true})
    pp!: number | null;

    @Field(() => Int, {nullable:true})
    accuracy!: number | null;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    target_id!: number;

    @Field(() => Int, {nullable:false})
    damage_class_id!: number;

    @Field(() => Int, {nullable:true})
    effect_id!: number | null;

    @Field(() => Int, {nullable:true})
    effect_chance!: number | null;

    @Field(() => Int, {nullable:true})
    contest_type_id!: number | null;

    @Field(() => Int, {nullable:true})
    contest_effect_id!: number | null;

    @Field(() => Int, {nullable:true})
    super_contest_effect_id!: number | null;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;

    @Field(() => Types, {nullable:false})
    type?: Types;

    @Field(() => MoveTargets, {nullable:false})
    target?: MoveTargets;

    @Field(() => MoveDamageClasses, {nullable:false})
    damageClass?: MoveDamageClasses;

    @Field(() => ContestTypes, {nullable:true})
    contestType?: ContestTypes | null;

    @Field(() => ContestEffects, {nullable:true})
    contestEffect?: ContestEffects | null;

    @Field(() => SuperContestEffects, {nullable:true})
    superContestEffect?: SuperContestEffects | null;

    @Field(() => [PokemonMoves], {nullable:true})
    pokemonMoves?: Array<PokemonMoves>;

    @Field(() => [Machines], {nullable:true})
    machines?: Array<Machines>;

    @Field(() => [MoveMeta], {nullable:true})
    meta?: Array<MoveMeta>;

    @Field(() => [MoveFlagMap], {nullable:true})
    flagMap?: Array<MoveFlagMap>;

    @Field(() => [ContestCombos], {nullable:true})
    contestCombos?: Array<ContestCombos>;

    @Field(() => [ContestCombos], {nullable:true})
    contestCombosSecond?: Array<ContestCombos>;

    @Field(() => [SuperContestCombos], {nullable:true})
    superContestCombos?: Array<SuperContestCombos>;

    @Field(() => [SuperContestCombos], {nullable:true})
    superContestCombosSecond?: Array<SuperContestCombos>;

    @Field(() => [PokemonEvolution], {nullable:true})
    knownMoves?: Array<PokemonEvolution>;

    @Field(() => MovesCount, {nullable:false})
    _count?: MovesCount;
}
