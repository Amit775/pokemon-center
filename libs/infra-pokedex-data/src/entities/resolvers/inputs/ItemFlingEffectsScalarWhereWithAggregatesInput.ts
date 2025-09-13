import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemFlingEffectsScalarWhereWithAggregatesInput", {})
export class ItemFlingEffectsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemFlingEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemFlingEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemFlingEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemFlingEffectsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
