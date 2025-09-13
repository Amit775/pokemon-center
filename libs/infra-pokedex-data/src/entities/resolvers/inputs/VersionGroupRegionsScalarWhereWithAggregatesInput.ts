import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("VersionGroupRegionsScalarWhereWithAggregatesInput", {})
export class VersionGroupRegionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VersionGroupRegionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VersionGroupRegionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VersionGroupRegionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  region_id?: IntWithAggregatesFilter | undefined;
}
