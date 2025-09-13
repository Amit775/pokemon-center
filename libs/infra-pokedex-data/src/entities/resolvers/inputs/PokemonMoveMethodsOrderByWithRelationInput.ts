import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesOrderByRelationAggregateInput } from "../inputs/PokemonMovesOrderByRelationAggregateInput";
import { VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMoveMethodsOrderByWithRelationInput", {})
export class PokemonMoveMethodsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput | undefined;
}
