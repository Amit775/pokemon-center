import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ItemGameIndexScalarWhereWithAggregatesInput", {})
export class ItemGameIndexScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemGameIndexScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  item_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  generation_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  game_index?: IntWithAggregatesFilter | undefined;
}
