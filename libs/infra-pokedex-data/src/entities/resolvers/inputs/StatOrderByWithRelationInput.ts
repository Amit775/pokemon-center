import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicOrderByRelationAggregateInput } from "../inputs/CharacteristicOrderByRelationAggregateInput";
import { MoveMetaStatChangesOrderByRelationAggregateInput } from "../inputs/MoveMetaStatChangesOrderByRelationAggregateInput";
import { NatureOrderByRelationAggregateInput } from "../inputs/NatureOrderByRelationAggregateInput";
import { PokemonStatOrderByRelationAggregateInput } from "../inputs/PokemonStatOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatOrderByWithRelationInput", {})
export class StatOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => PokemonStatOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonStats?: PokemonStatOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesOrderByRelationAggregateInput, {
    nullable: true
  })
  moveMetaStatChanges?: MoveMetaStatChangesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicOrderByRelationAggregateInput, {
    nullable: true
  })
  characteristics?: CharacteristicOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureOrderByRelationAggregateInput, {
    nullable: true
  })
  natures?: NatureOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureOrderByRelationAggregateInput, {
    nullable: true
  })
  naturesIncreased?: NatureOrderByRelationAggregateInput | undefined;
}
