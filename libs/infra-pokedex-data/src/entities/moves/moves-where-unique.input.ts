import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';
import { MoveTargetsScalarRelationFilter } from '../move-targets/move-targets-scalar-relation-filter.input';
import { MoveDamageClassesScalarRelationFilter } from '../move-damage-classes/move-damage-classes-scalar-relation-filter.input';
import { ContestTypesScalarRelationFilter } from '../contest-types/contest-types-scalar-relation-filter.input';
import { ContestEffectsScalarRelationFilter } from '../contest-effects/contest-effects-scalar-relation-filter.input';
import { SuperContestEffectsScalarRelationFilter } from '../super-contest-effects/super-contest-effects-scalar-relation-filter.input';
import { PokemonMovesListRelationFilter } from '../pokemon-moves/pokemon-moves-list-relation-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { MoveMetaListRelationFilter } from '../move-meta/move-meta-list-relation-filter.input';
import { MoveFlagMapListRelationFilter } from '../move-flag-map/move-flag-map-list-relation-filter.input';
import { ContestCombosListRelationFilter } from '../contest-combos/contest-combos-list-relation-filter.input';
import { SuperContestCombosListRelationFilter } from '../super-contest-combos/super-contest-combos-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class MovesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MovesWhereInput], {nullable:true})
    AND?: Array<MovesWhereInput>;

    @Field(() => [MovesWhereInput], {nullable:true})
    OR?: Array<MovesWhereInput>;

    @Field(() => [MovesWhereInput], {nullable:true})
    NOT?: Array<MovesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    power?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pp?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    accuracy?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    priority?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    target_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    effect_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    effect_chance?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    contest_effect_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    super_contest_effect_id?: Identity<IntFilter>;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: Identity<GenerationsScalarRelationFilter>;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    type?: Identity<TypesScalarRelationFilter>;

    @Field(() => MoveTargetsScalarRelationFilter, {nullable:true})
    target?: Identity<MoveTargetsScalarRelationFilter>;

    @Field(() => MoveDamageClassesScalarRelationFilter, {nullable:true})
    damageClass?: Identity<MoveDamageClassesScalarRelationFilter>;

    @Field(() => ContestTypesScalarRelationFilter, {nullable:true})
    contestType?: Identity<ContestTypesScalarRelationFilter>;

    @Field(() => ContestEffectsScalarRelationFilter, {nullable:true})
    contestEffect?: Identity<ContestEffectsScalarRelationFilter>;

    @Field(() => SuperContestEffectsScalarRelationFilter, {nullable:true})
    superContestEffect?: Identity<SuperContestEffectsScalarRelationFilter>;

    @Field(() => PokemonMovesListRelationFilter, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesListRelationFilter>;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: Identity<MachinesListRelationFilter>;

    @Field(() => MoveMetaListRelationFilter, {nullable:true})
    meta?: Identity<MoveMetaListRelationFilter>;

    @Field(() => MoveFlagMapListRelationFilter, {nullable:true})
    flagMap?: Identity<MoveFlagMapListRelationFilter>;

    @Field(() => ContestCombosListRelationFilter, {nullable:true})
    contestCombos?: Identity<ContestCombosListRelationFilter>;

    @Field(() => ContestCombosListRelationFilter, {nullable:true})
    contestCombosSecond?: Identity<ContestCombosListRelationFilter>;

    @Field(() => SuperContestCombosListRelationFilter, {nullable:true})
    superContestCombos?: Identity<SuperContestCombosListRelationFilter>;

    @Field(() => SuperContestCombosListRelationFilter, {nullable:true})
    superContestCombosSecond?: Identity<SuperContestCombosListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    knownMoves?: Identity<PokemonEvolutionListRelationFilter>;
}
