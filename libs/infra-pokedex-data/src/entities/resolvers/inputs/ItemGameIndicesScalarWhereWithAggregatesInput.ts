import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ItemGameIndicesScalarWhereWithAggregatesInput", {})
export class ItemGameIndicesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemGameIndicesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemGameIndicesScalarWhereWithAggregatesInput[] | undefined;

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
