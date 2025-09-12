import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsRelationFilter", {})
export class GenerationsRelationFilter {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  is?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  isNot?: GenerationsWhereInput | undefined;
}
