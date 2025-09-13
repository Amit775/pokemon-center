import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ContestEffectsScalarWhereWithAggregatesInput", {})
export class ContestEffectsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContestEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContestEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContestEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContestEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  appeal?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  jam?: IntWithAggregatesFilter | undefined;
}
