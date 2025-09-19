import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupRelationFilter", {})
export class VersionGroupRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  is?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  isNot?: VersionGroupWhereInput | undefined;
}
