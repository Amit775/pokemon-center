import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonColorOrderByWithRelationInput", {})
export class PokemonColorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByRelationAggregateInput | undefined;
}
