import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesWhereInput } from "../inputs/BerriesWhereInput";

@TypeGraphQL.InputType("BerriesRelationFilter", {})
export class BerriesRelationFilter {
  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  is?: BerriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  isNot?: BerriesWhereInput | undefined;
}
