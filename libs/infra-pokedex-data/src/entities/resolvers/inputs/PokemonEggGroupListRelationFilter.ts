import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupWhereInput } from "../inputs/PokemonEggGroupWhereInput";

@TypeGraphQL.InputType("PokemonEggGroupListRelationFilter", {})
export class PokemonEggGroupListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  every?: PokemonEggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  some?: PokemonEggGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupWhereInput, {
    nullable: true
  })
  none?: PokemonEggGroupWhereInput | undefined;
}
