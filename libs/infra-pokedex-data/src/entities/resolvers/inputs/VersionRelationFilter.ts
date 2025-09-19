import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionRelationFilter", {})
export class VersionRelationFilter {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  is?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  isNot?: VersionWhereInput | undefined;
}
