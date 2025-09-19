import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveOrderByRelationAggregateInput } from "../inputs/PokemonMoveOrderByRelationAggregateInput";
import { VersionGroupPokemonMoveMethodOrderByRelationAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMoveMethodOrderByWithRelationInput", {})
export class PokemonMoveMethodOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: VersionGroupPokemonMoveMethodOrderByRelationAggregateInput | undefined;
}
