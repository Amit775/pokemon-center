import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupWhereInput } from "../inputs/PokedexVersionGroupWhereInput";

@TypeGraphQL.InputType("PokedexVersionGroupListRelationFilter", {})
export class PokedexVersionGroupListRelationFilter {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  every?: PokedexVersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  some?: PokedexVersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  none?: PokedexVersionGroupWhereInput | undefined;
}
