import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesWhereInput } from "../inputs/MoveBattleStylesWhereInput";

@TypeGraphQL.InputType("MoveBattleStylesRelationFilter", {})
export class MoveBattleStylesRelationFilter {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  is?: MoveBattleStylesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  isNot?: MoveBattleStylesWhereInput | undefined;
}
