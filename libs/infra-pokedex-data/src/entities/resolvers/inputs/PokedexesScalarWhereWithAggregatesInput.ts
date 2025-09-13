import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PokedexesScalarWhereWithAggregatesInput", {})
export class PokedexesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PokedexesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PokedexesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PokedexesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PokedexesScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  is_main_series?: IntWithAggregatesFilter | undefined;
}
