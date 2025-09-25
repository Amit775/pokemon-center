import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboOrderByRelationAggregateInput } from "../inputs/ContestComboOrderByRelationAggregateInput";
import { ContestEffectOrderByWithRelationInput } from "../inputs/ContestEffectOrderByWithRelationInput";
import { ContestTypeOrderByWithRelationInput } from "../inputs/ContestTypeOrderByWithRelationInput";
import { GenerationOrderByWithRelationInput } from "../inputs/GenerationOrderByWithRelationInput";
import { MachineOrderByRelationAggregateInput } from "../inputs/MachineOrderByRelationAggregateInput";
import { MoveDamageClassOrderByWithRelationInput } from "../inputs/MoveDamageClassOrderByWithRelationInput";
import { MoveEffectOrderByWithRelationInput } from "../inputs/MoveEffectOrderByWithRelationInput";
import { MoveFlagMapOrderByRelationAggregateInput } from "../inputs/MoveFlagMapOrderByRelationAggregateInput";
import { MoveMetaOrderByRelationAggregateInput } from "../inputs/MoveMetaOrderByRelationAggregateInput";
import { MoveTargetOrderByWithRelationInput } from "../inputs/MoveTargetOrderByWithRelationInput";
import { PokemonEvolutionOrderByRelationAggregateInput } from "../inputs/PokemonEvolutionOrderByRelationAggregateInput";
import { PokemonMoveOrderByRelationAggregateInput } from "../inputs/PokemonMoveOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SuperContestComboOrderByRelationAggregateInput } from "../inputs/SuperContestComboOrderByRelationAggregateInput";
import { SuperContestEffectOrderByWithRelationInput } from "../inputs/SuperContestEffectOrderByWithRelationInput";
import { TypeOrderByWithRelationInput } from "../inputs/TypeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveOrderByWithRelationInput", {})
export class MoveOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => GenerationOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByWithRelationInput, {
    nullable: true
  })
  type?: TypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetOrderByWithRelationInput, {
    nullable: true
  })
  target?: MoveTargetOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassOrderByWithRelationInput, {
    nullable: true
  })
  damageClass?: MoveDamageClassOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectOrderByWithRelationInput, {
    nullable: true
  })
  effect?: MoveEffectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeOrderByWithRelationInput, {
    nullable: true
  })
  contestType?: ContestTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectOrderByWithRelationInput, {
    nullable: true
  })
  contestEffect?: ContestEffectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectOrderByWithRelationInput, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineOrderByRelationAggregateInput, {
    nullable: true
  })
  machines?: MachineOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaOrderByRelationAggregateInput, {
    nullable: true
  })
  meta?: MoveMetaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapOrderByRelationAggregateInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboOrderByRelationAggregateInput, {
    nullable: true
  })
  contestCombos?: ContestComboOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboOrderByRelationAggregateInput, {
    nullable: true
  })
  contestCombosSecond?: ContestComboOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboOrderByRelationAggregateInput, {
    nullable: true
  })
  superContestCombos?: SuperContestComboOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboOrderByRelationAggregateInput, {
    nullable: true
  })
  superContestCombosSecond?: SuperContestComboOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionOrderByRelationAggregateInput, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionOrderByRelationAggregateInput | undefined;
}
