import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapWhereInput } from "../inputs/MoveFlagMapWhereInput";

@TypeGraphQL.InputType("MoveFlagMapListRelationFilter", {})
export class MoveFlagMapListRelationFilter {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  every?: MoveFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  some?: MoveFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  none?: MoveFlagMapWhereInput | undefined;
}
