import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LocationsScalarWhereWithAggregatesInput", {})
export class LocationsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationsScalarWhereWithAggregatesInput[] | undefined;

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
