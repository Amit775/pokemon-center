import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboWhereInput } from "../inputs/ContestComboWhereInput";

@TypeGraphQL.InputType("ContestComboListRelationFilter", {})
export class ContestComboListRelationFilter {
  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  every?: ContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  some?: ContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  none?: ContestComboWhereInput | undefined;
}
