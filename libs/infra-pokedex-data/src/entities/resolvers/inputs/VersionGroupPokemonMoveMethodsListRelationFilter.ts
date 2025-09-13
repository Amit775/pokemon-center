import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsWhereInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsListRelationFilter", {})
export class VersionGroupPokemonMoveMethodsListRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  every?: VersionGroupPokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  some?: VersionGroupPokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  none?: VersionGroupPokemonMoveMethodsWhereInput | undefined;
}
