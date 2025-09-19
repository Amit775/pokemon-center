import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboListRelationFilter } from "../inputs/ContestComboListRelationFilter";
import { ContestEffectsNullableRelationFilter } from "../inputs/ContestEffectsNullableRelationFilter";
import { ContestTypesNullableRelationFilter } from "../inputs/ContestTypesNullableRelationFilter";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MachineListRelationFilter } from "../inputs/MachineListRelationFilter";
import { MoveDamageClassRelationFilter } from "../inputs/MoveDamageClassRelationFilter";
import { MoveEffectsNullableRelationFilter } from "../inputs/MoveEffectsNullableRelationFilter";
import { MoveFlagMapListRelationFilter } from "../inputs/MoveFlagMapListRelationFilter";
import { MoveMetaListRelationFilter } from "../inputs/MoveMetaListRelationFilter";
import { MoveMetaStatChangesListRelationFilter } from "../inputs/MoveMetaStatChangesListRelationFilter";
import { MoveTargetRelationFilter } from "../inputs/MoveTargetRelationFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { PokemonMoveListRelationFilter } from "../inputs/PokemonMoveListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SuperContestComboListRelationFilter } from "../inputs/SuperContestComboListRelationFilter";
import { SuperContestEffectsNullableRelationFilter } from "../inputs/SuperContestEffectsNullableRelationFilter";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("MoveWhereInput", {})
export class MoveWhereInput {
  @TypeGraphQL.Field(_type => [MoveWhereInput], {
    nullable: true
  })
  AND?: MoveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereInput], {
    nullable: true
  })
  OR?: MoveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereInput], {
    nullable: true
  })
  NOT?: MoveWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypeRelationFilter, {
    nullable: true
  })
  type?: TypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveTargetRelationFilter, {
    nullable: true
  })
  target?: MoveTargetRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassRelationFilter, {
    nullable: true
  })
  damageClass?: MoveDamageClassRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => PokemonMoveListRelationFilter, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MachineListRelationFilter, {
    nullable: true
  })
  machines?: MachineListRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => ContestComboListRelationFilter, {
    nullable: true
  })
  contestCombos?: ContestComboListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContestComboListRelationFilter, {
    nullable: true
  })
  contestCombosSecond?: ContestComboListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboListRelationFilter, {
    nullable: true
  })
  superContestCombos?: SuperContestComboListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboListRelationFilter, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestComboListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionListRelationFilter | undefined;
}
