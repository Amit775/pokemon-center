import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("VersionGroupRegionScalarWhereWithAggregatesInput", {})
export class VersionGroupRegionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VersionGroupRegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VersionGroupRegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VersionGroupRegionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  region_id?: IntWithAggregatesFilter | undefined;
}
