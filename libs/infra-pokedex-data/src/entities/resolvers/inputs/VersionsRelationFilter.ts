import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsRelationFilter", {})
export class VersionsRelationFilter {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  is?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  isNot?: VersionsWhereInput | undefined;
}
