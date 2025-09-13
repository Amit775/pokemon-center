import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsOrderByWithRelationInput } from "../inputs/RegionsOrderByWithRelationInput";
import { VersionGroupsOrderByWithRelationInput } from "../inputs/VersionGroupsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupRegionsOrderByWithRelationInput", {})
export class VersionGroupRegionsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => RegionsOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionsOrderByWithRelationInput | undefined;
}
