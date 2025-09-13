import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("LocationGameIndicesScalarWhereWithAggregatesInput", {})
export class LocationGameIndicesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationGameIndicesScalarWhereWithAggregatesInput[] | undefined;

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
