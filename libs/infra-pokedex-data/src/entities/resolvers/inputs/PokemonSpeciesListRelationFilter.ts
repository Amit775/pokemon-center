import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesListRelationFilter", {})
export class PokemonSpeciesListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  every?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  some?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  none?: PokemonSpeciesWhereInput | undefined;
}
