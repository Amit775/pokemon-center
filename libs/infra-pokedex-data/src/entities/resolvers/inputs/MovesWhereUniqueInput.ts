import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosListRelationFilter } from "../inputs/ContestCombosListRelationFilter";
import { ContestEffectsNullableRelationFilter } from "../inputs/ContestEffectsNullableRelationFilter";
import { ContestTypesNullableRelationFilter } from "../inputs/ContestTypesNullableRelationFilter";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MachinesListRelationFilter } from "../inputs/MachinesListRelationFilter";
import { MoveDamageClassesRelationFilter } from "../inputs/MoveDamageClassesRelationFilter";
import { MoveEffectsNullableRelationFilter } from "../inputs/MoveEffectsNullableRelationFilter";
import { MoveFlagMapListRelationFilter } from "../inputs/MoveFlagMapListRelationFilter";
import { MoveMetaListRelationFilter } from "../inputs/MoveMetaListRelationFilter";
import { MoveMetaStatChangesListRelationFilter } from "../inputs/MoveMetaStatChangesListRelationFilter";
import { MoveTargetsRelationFilter } from "../inputs/MoveTargetsRelationFilter";
import { MovesWhereInput } from "../inputs/MovesWhereInput";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonMovesListRelationFilter } from "../inputs/PokemonMovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SuperContestCombosListRelationFilter } from "../inputs/SuperContestCombosListRelationFilter";
import { SuperContestEffectsNullableRelationFilter } from "../inputs/SuperContestEffectsNullableRelationFilter";
import { TypesRelationFilter } from "../inputs/TypesRelationFilter";

@TypeGraphQL.InputType("MovesWhereUniqueInput", {})
export class MovesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereInput], {
    nullable: true
  })
  AND?: MovesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereInput], {
    nullable: true
  })
  OR?: MovesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereInput], {
    nullable: true
  })
  NOT?: MovesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  power?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  pp?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  accuracy?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  priority?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  target_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  damage_class_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  effect_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  effect_chance?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  contest_type_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  contest_effect_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  super_contest_effect_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  type?: TypesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsRelationFilter, {
    nullable: true
  })
  target?: MoveTargetsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesRelationFilter, {
    nullable: true
  })
  damageClass?: MoveDamageClassesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsNullableRelationFilter, {
    nullable: true
  })
  effect?: MoveEffectsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestTypesNullableRelationFilter, {
    nullable: true
  })
  contestType?: ContestTypesNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsNullableRelationFilter, {
    nullable: true
  })
  contestEffect?: ContestEffectsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsNullableRelationFilter, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectsNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesListRelationFilter, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MachinesListRelationFilter, {
    nullable: true
  })
  machines?: MachinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaListRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesListRelationFilter, {
    nullable: true
  })
  metaStatChanges?: MoveMetaStatChangesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: MoveFlagMapListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestCombosListRelationFilter, {
    nullable: true
  })
  contestCombos?: ContestCombosListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestCombosListRelationFilter, {
    nullable: true
  })
  contestCombosSecond?: ContestCombosListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosListRelationFilter, {
    nullable: true
  })
  superContestCombos?: SuperContestCombosListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosListRelationFilter, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestCombosListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionListRelationFilter | undefined;
}
