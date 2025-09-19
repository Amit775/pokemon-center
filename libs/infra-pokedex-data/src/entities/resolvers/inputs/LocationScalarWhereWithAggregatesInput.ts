import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LocationScalarWhereWithAggregatesInput", {})
export class LocationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  region_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
