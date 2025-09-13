import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VersionGroupsScalarWhereWithAggregatesInput", {})
export class VersionGroupsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VersionGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VersionGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VersionGroupsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  order?: IntWithAggregatesFilter | undefined;
}
