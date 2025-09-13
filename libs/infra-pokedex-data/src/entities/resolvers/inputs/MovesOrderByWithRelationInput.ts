import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosOrderByRelationAggregateInput } from "../inputs/ContestCombosOrderByRelationAggregateInput";
import { ContestEffectsOrderByWithRelationInput } from "../inputs/ContestEffectsOrderByWithRelationInput";
import { ContestTypesOrderByWithRelationInput } from "../inputs/ContestTypesOrderByWithRelationInput";
import { GenerationsOrderByWithRelationInput } from "../inputs/GenerationsOrderByWithRelationInput";
import { MachinesOrderByRelationAggregateInput } from "../inputs/MachinesOrderByRelationAggregateInput";
import { MoveDamageClassesOrderByWithRelationInput } from "../inputs/MoveDamageClassesOrderByWithRelationInput";
import { MoveEffectsOrderByWithRelationInput } from "../inputs/MoveEffectsOrderByWithRelationInput";
import { MoveFlagMapOrderByRelationAggregateInput } from "../inputs/MoveFlagMapOrderByRelationAggregateInput";
import { MoveMetaOrderByRelationAggregateInput } from "../inputs/MoveMetaOrderByRelationAggregateInput";
import { MoveMetaStatChangesOrderByRelationAggregateInput } from "../inputs/MoveMetaStatChangesOrderByRelationAggregateInput";
import { MoveTargetsOrderByWithRelationInput } from "../inputs/MoveTargetsOrderByWithRelationInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonMovesOrderByRelationAggregateInput } from "../inputs/PokemonMovesOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SuperContestCombosOrderByRelationAggregateInput } from "../inputs/SuperContestCombosOrderByRelationAggregateInput";
import { SuperContestEffectsOrderByWithRelationInput } from "../inputs/SuperContestEffectsOrderByWithRelationInput";
import { TypesOrderByWithRelationInput } from "../inputs/TypesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovesOrderByWithRelationInput", {})
export class MovesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  power?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  pp?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  accuracy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  damage_class_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  effect_chance?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  contest_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  contest_effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  super_contest_effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByWithRelationInput, {
    nullable: true
  })
  type?: TypesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsOrderByWithRelationInput, {
    nullable: true
  })
  target?: MoveTargetsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesOrderByWithRelationInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsOrderByWithRelationInput, {
    nullable: true
  })
  effect?: MoveEffectsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesOrderByWithRelationInput, {
    nullable: true
  })
  contestType?: ContestTypesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsOrderByWithRelationInput, {
    nullable: true
  })
  contestEffect?: ContestEffectsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsOrderByWithRelationInput, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesOrderByRelationAggregateInput, {
    nullable: true
  })
  machines?: MachinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaOrderByRelationAggregateInput, {
    nullable: true
  })
  meta?: MoveMetaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesOrderByRelationAggregateInput, {
    nullable: true
  })
  metaStatChanges?: MoveMetaStatChangesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapOrderByRelationAggregateInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosOrderByRelationAggregateInput, {
    nullable: true
  })
  contestCombos?: ContestCombosOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosOrderByRelationAggregateInput, {
    nullable: true
  })
  contestCombosSecond?: ContestCombosOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosOrderByRelationAggregateInput, {
    nullable: true
  })
  superContestCombos?: SuperContestCombosOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosOrderByRelationAggregateInput, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestCombosOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}
