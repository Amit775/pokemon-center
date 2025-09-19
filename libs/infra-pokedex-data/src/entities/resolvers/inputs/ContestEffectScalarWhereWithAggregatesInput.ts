import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ContestEffectScalarWhereWithAggregatesInput", {})
export class ContestEffectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContestEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContestEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContestEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContestEffectScalarWhereWithAggregatesInput[] | undefined;

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
