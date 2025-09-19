import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("LocationGameIndexScalarWhereWithAggregatesInput", {})
export class LocationGameIndexScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  location_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;
}
