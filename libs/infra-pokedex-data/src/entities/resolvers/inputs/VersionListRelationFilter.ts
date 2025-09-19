import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionWhereInput } from "../inputs/VersionWhereInput";

@TypeGraphQL.InputType("VersionListRelationFilter", {})
export class VersionListRelationFilter {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  every?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  some?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  none?: VersionWhereInput | undefined;
}
