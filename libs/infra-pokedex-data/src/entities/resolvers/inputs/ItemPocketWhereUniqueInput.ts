import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryListRelationFilter } from "../inputs/ItemCategoryListRelationFilter";
import { ItemPocketWhereInput } from "../inputs/ItemPocketWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemPocketWhereUniqueInput", {})
export class ItemPocketWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketWhereInput], {
    nullable: true
  })
  AND?: ItemPocketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketWhereInput], {
    nullable: true
  })
  OR?: ItemPocketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketWhereInput], {
    nullable: true
  })
  NOT?: ItemPocketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryListRelationFilter, {
    nullable: true
  })
  categories?: ItemCategoryListRelationFilter | undefined;
}
