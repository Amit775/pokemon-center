import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesWhereInput } from "../inputs/PokemonAbilitiesWhereInput";

@TypeGraphQL.InputType("PokemonAbilitiesListRelationFilter", {})
export class PokemonAbilitiesListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  every?: PokemonAbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  some?: PokemonAbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesWhereInput, {
    nullable: true
  })
  none?: PokemonAbilitiesWhereInput | undefined;
}
