import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleWhereInput } from "../inputs/MoveBattleStyleWhereInput";

@TypeGraphQL.InputType("MoveBattleStyleRelationFilter", {})
export class MoveBattleStyleRelationFilter {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  is?: MoveBattleStyleWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  isNot?: MoveBattleStyleWhereInput | undefined;
}
