import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatRelationFilter", {})
export class StatRelationFilter {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  is?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  isNot?: StatWhereInput | undefined;
}
