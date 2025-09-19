import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ItemFlingEffectScalarWhereWithAggregatesInput", {})
export class ItemFlingEffectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ItemFlingEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ItemFlingEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ItemFlingEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ItemFlingEffectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;
}
