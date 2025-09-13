import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ExperienceScalarWhereWithAggregatesInput", {})
export class ExperienceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExperienceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExperienceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExperienceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExperienceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  growth_rate_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  level?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  experience?: IntWithAggregatesFilter | undefined;
}
