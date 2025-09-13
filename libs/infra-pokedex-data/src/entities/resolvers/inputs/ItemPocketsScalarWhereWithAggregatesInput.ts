import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemPocketsScalarWhereWithAggregatesInput", {})
export class ItemPocketsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemPocketsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemPocketsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemPocketsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemPocketsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
