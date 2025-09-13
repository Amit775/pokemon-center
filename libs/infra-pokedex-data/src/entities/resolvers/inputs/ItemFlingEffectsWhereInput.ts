import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemsListRelationFilter } from "../inputs/ItemsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlingEffectsWhereInput", {})
export class ItemFlingEffectsWhereInput {
  @TypeGraphQL.Field(_type => [ItemFlingEffectsWhereInput], {
    nullable: true
  })
  AND?: ItemFlingEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsWhereInput], {
    nullable: true
  })
  OR?: ItemFlingEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsWhereInput], {
    nullable: true
  })
  NOT?: ItemFlingEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsListRelationFilter, {
    nullable: true
  })
  items?: ItemsListRelationFilter | undefined;
}
