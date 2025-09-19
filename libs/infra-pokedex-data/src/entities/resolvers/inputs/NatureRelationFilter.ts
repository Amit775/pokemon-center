import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureWhereInput } from "../inputs/NatureWhereInput";

@TypeGraphQL.InputType("NatureRelationFilter", {})
export class NatureRelationFilter {
  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  is?: NatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  isNot?: NatureWhereInput | undefined;
}
