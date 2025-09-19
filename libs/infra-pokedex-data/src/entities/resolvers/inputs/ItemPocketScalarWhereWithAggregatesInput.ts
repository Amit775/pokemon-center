import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemPocketScalarWhereWithAggregatesInput", {})
export class ItemPocketScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemPocketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemPocketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemPocketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemPocketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
