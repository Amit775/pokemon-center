import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("LocationAreaScalarWhereWithAggregatesInput", {})
export class LocationAreaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LocationAreaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LocationAreaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LocationAreaScalarWhereWithAggregatesInput[] | undefined;

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
