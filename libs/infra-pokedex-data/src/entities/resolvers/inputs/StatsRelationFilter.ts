import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatsWhereInput } from "../inputs/StatsWhereInput";

@TypeGraphQL.InputType("StatsRelationFilter", {})
export class StatsRelationFilter {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  is?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  isNot?: StatsWhereInput | undefined;
}
