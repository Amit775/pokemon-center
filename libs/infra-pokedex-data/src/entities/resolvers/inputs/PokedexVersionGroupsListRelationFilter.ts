import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsWhereInput } from "../inputs/PokedexVersionGroupsWhereInput";

@TypeGraphQL.InputType("PokedexVersionGroupsListRelationFilter", {})
export class PokedexVersionGroupsListRelationFilter {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  every?: PokedexVersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  some?: PokedexVersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  none?: PokedexVersionGroupsWhereInput | undefined;
}
