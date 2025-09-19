import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupListRelationFilter", {})
export class VersionGroupListRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  every?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  some?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  none?: VersionGroupWhereInput | undefined;
}
