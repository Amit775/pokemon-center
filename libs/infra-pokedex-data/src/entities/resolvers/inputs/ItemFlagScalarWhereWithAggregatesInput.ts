import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemFlagScalarWhereWithAggregatesInput", {})
export class ItemFlagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemFlagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemFlagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemFlagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemFlagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
