import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("LocationAreasScalarWhereWithAggregatesInput", {})
export class LocationAreasScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationAreasScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationAreasScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationAreasScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  location_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringNullableWithAggregatesFilter | undefined;
}
