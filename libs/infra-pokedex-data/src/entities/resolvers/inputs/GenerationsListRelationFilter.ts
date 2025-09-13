import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsListRelationFilter", {})
export class GenerationsListRelationFilter {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  every?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  some?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  none?: GenerationsWhereInput | undefined;
}
