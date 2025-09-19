import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureWhereInput } from "../inputs/NatureWhereInput";

@TypeGraphQL.InputType("NatureListRelationFilter", {})
export class NatureListRelationFilter {
  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  every?: NatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  some?: NatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureWhereInput, {
    nullable: true
  })
  none?: NatureWhereInput | undefined;
}
