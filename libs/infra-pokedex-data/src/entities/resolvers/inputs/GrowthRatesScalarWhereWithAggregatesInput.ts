import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GrowthRatesScalarWhereWithAggregatesInput", {})
export class GrowthRatesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GrowthRatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GrowthRatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GrowthRatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GrowthRatesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GrowthRatesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  formula?: StringWithAggregatesFilter | undefined;
}
