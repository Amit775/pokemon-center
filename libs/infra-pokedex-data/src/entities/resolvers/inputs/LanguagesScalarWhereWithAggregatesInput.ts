import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LanguagesScalarWhereWithAggregatesInput", {})
export class LanguagesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LanguagesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LanguagesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguagesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LanguagesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguagesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LanguagesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  iso639?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  iso3166?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  official?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  order?: IntWithAggregatesFilter | undefined;
}
