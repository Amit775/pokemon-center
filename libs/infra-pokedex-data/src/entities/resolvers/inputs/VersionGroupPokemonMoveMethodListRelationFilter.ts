import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodWhereInput } from "../inputs/VersionGroupPokemonMoveMethodWhereInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodListRelationFilter", {})
export class VersionGroupPokemonMoveMethodListRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  every?: VersionGroupPokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  some?: VersionGroupPokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  none?: VersionGroupPokemonMoveMethodWhereInput | undefined;
}
