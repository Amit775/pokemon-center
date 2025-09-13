import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsOrderByRelationAggregateInput } from "../inputs/CharacteristicsOrderByRelationAggregateInput";
import { MoveMetaStatChangesOrderByRelationAggregateInput } from "../inputs/MoveMetaStatChangesOrderByRelationAggregateInput";
import { NaturesOrderByRelationAggregateInput } from "../inputs/NaturesOrderByRelationAggregateInput";
import { PokemonStatsOrderByRelationAggregateInput } from "../inputs/PokemonStatsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatsOrderByWithRelationInput", {})
export class StatsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  damage_class_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_battle_only?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  game_index?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonStats?: PokemonStatsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesOrderByRelationAggregateInput, {
    nullable: true
  })
  moveMetaStatChanges?: MoveMetaStatChangesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsOrderByRelationAggregateInput, {
    nullable: true
  })
  characteristics?: CharacteristicsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesOrderByRelationAggregateInput, {
    nullable: true
  })
  natures?: NaturesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesOrderByRelationAggregateInput, {
    nullable: true
  })
  naturesIncreased?: NaturesOrderByRelationAggregateInput | undefined;
}
