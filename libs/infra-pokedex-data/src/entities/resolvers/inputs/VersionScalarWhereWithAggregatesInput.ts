import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VersionScalarWhereWithAggregatesInput", {})
export class VersionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VersionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VersionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VersionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VersionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  version_group_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
