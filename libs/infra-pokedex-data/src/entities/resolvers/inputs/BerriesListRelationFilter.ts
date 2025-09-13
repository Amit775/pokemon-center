import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesWhereInput } from "../inputs/BerriesWhereInput";

@TypeGraphQL.InputType("BerriesListRelationFilter", {})
export class BerriesListRelationFilter {
  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  every?: BerriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  some?: BerriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  none?: BerriesWhereInput | undefined;
}
