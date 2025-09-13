import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsWhereInput } from "../inputs/ItemFlingEffectsWhereInput";
import { ItemsListRelationFilter } from "../inputs/ItemsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlingEffectsWhereUniqueInput", {})
export class ItemFlingEffectsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsListRelationFilter, {
    nullable: true
  })
  items?: ItemsListRelationFilter | undefined;
}
