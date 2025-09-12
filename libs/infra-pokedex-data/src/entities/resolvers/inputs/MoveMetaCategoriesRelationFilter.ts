import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesWhereInput } from "../inputs/MoveMetaCategoriesWhereInput";

@TypeGraphQL.InputType("MoveMetaCategoriesRelationFilter", {})
export class MoveMetaCategoriesRelationFilter {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  is?: MoveMetaCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  isNot?: MoveMetaCategoriesWhereInput | undefined;
}
