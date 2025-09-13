import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsWhereInput } from "../inputs/PokemonEggGroupsWhereInput";

@TypeGraphQL.InputType("PokemonEggGroupsListRelationFilter", {})
export class PokemonEggGroupsListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  every?: PokemonEggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  some?: PokemonEggGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsWhereInput, {
    nullable: true
  })
  none?: PokemonEggGroupsWhereInput | undefined;
}
