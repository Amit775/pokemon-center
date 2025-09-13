import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NaturesScalarWhereWithAggregatesInput", {})
export class NaturesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NaturesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NaturesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NaturesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NaturesScalarWhereWithAggregatesInput[] | undefined;

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
  decreased_stat_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  increased_stat_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  hates_flavor_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  likes_flavor_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;
}
