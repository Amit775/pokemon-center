import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectWhereInput } from "../inputs/ItemFlingEffectWhereInput";
import { ItemListRelationFilter } from "../inputs/ItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlingEffectWhereUniqueInput", {})
export class ItemFlingEffectWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectWhereInput], {
    nullable: true
  })
  AND?: ItemFlingEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectWhereInput], {
    nullable: true
  })
  OR?: ItemFlingEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectWhereInput], {
    nullable: true
  })
  NOT?: ItemFlingEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemListRelationFilter, {
    nullable: true
  })
  items?: ItemListRelationFilter | undefined;
}
