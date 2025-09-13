import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsWhereInput } from "../inputs/VersionsWhereInput";

@TypeGraphQL.InputType("VersionsListRelationFilter", {})
export class VersionsListRelationFilter {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  every?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  some?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  none?: VersionsWhereInput | undefined;
}
