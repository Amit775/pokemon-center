import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ItemFlagMapScalarWhereWithAggregatesInput", {})
export class ItemFlagMapScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemFlagMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemFlagMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemFlagMapScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  item_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  item_flag_id?: IntWithAggregatesFilter | undefined;
}
