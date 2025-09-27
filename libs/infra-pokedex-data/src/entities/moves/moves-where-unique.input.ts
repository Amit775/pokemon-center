import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';
import { MoveTargetsScalarRelationFilter } from '../move-targets/move-targets-scalar-relation-filter.input';
import { MoveDamageClassesScalarRelationFilter } from '../move-damage-classes/move-damage-classes-scalar-relation-filter.input';
import { ContestTypesNullableScalarRelationFilter } from '../contest-types/contest-types-nullable-scalar-relation-filter.input';
import { ContestEffectsNullableScalarRelationFilter } from '../contest-effects/contest-effects-nullable-scalar-relation-filter.input';
import { SuperContestEffectsNullableScalarRelationFilter } from '../super-contest-effects/super-contest-effects-nullable-scalar-relation-filter.input';
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
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    pp?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    accuracy?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_chance?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    super_contest_effect_id?: IntNullableFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    type?: TypesScalarRelationFilter;

    @Field(() => MoveTargetsScalarRelationFilter, {nullable:true})
    target?: MoveTargetsScalarRelationFilter;

    @Field(() => MoveDamageClassesScalarRelationFilter, {nullable:true})
    damageClass?: MoveDamageClassesScalarRelationFilter;

    @Field(() => ContestTypesNullableScalarRelationFilter, {nullable:true})
    contestType?: ContestTypesNullableScalarRelationFilter;

    @Field(() => ContestEffectsNullableScalarRelationFilter, {nullable:true})
    contestEffect?: ContestEffectsNullableScalarRelationFilter;

    @Field(() => SuperContestEffectsNullableScalarRelationFilter, {nullable:true})
    superContestEffect?: SuperContestEffectsNullableScalarRelationFilter;

    @Field(() => PokemonMovesListRelationFilter, {nullable:true})
    pokemonMoves?: PokemonMovesListRelationFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => MoveMetaListRelationFilter, {nullable:true})
    meta?: MoveMetaListRelationFilter;

    @Field(() => MoveFlagMapListRelationFilter, {nullable:true})
    flagMap?: MoveFlagMapListRelationFilter;

    @Field(() => ContestCombosListRelationFilter, {nullable:true})
    contestCombos?: ContestCombosListRelationFilter;

    @Field(() => ContestCombosListRelationFilter, {nullable:true})
    contestCombosSecond?: ContestCombosListRelationFilter;

    @Field(() => SuperContestCombosListRelationFilter, {nullable:true})
    superContestCombos?: SuperContestCombosListRelationFilter;

    @Field(() => SuperContestCombosListRelationFilter, {nullable:true})
    superContestCombosSecond?: SuperContestCombosListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    knownMoves?: PokemonEvolutionListRelationFilter;
}
