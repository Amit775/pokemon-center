import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GenerationsScalarWhereWithAggregatesInput", {})
export class GenerationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GenerationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GenerationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GenerationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GenerationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  main_region_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
