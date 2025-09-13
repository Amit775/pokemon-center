import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EncounterMethodsScalarWhereWithAggregatesInput", {})
export class EncounterMethodsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EncounterMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EncounterMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EncounterMethodsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterMethodsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EncounterMethodsScalarWhereWithAggregatesInput[] | undefined;

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
  order?: IntWithAggregatesFilter | undefined;
}
