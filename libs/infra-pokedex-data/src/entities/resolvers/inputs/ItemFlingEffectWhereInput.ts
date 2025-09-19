import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemListRelationFilter } from "../inputs/ItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlingEffectWhereInput", {})
export class ItemFlingEffectWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemListRelationFilter, {
    nullable: true
  })
  items?: ItemListRelationFilter | undefined;
}
