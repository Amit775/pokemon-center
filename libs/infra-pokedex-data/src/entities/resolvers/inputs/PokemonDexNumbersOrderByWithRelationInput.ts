import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesOrderByWithRelationInput } from "../inputs/PokedexesOrderByWithRelationInput";
import { PokemonSpeciesOrderByWithRelationInput } from "../inputs/PokemonSpeciesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonDexNumbersOrderByWithRelationInput", {})
export class PokemonDexNumbersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokedex_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesOrderByWithRelationInput, {
    nullable: true
  })
  pokedex?: PokedexesOrderByWithRelationInput | undefined;
}
