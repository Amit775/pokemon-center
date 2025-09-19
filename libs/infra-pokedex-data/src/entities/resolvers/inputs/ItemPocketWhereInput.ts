import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemCategoryListRelationFilter } from "../inputs/ItemCategoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemPocketWhereInput", {})
export class ItemPocketWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryListRelationFilter, {
    nullable: true
  })
  categories?: ItemCategoryListRelationFilter | undefined;
}
