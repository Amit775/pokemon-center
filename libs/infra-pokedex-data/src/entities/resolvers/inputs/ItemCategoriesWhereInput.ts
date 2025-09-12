import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemPocketsRelationFilter } from "../inputs/ItemPocketsRelationFilter";
import { ItemsListRelationFilter } from "../inputs/ItemsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemCategoriesWhereInput", {})
export class ItemCategoriesWhereInput {
  @TypeGraphQL.Field(_type => [ItemCategoriesWhereInput], {
    nullable: true
  })
  AND?: ItemCategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereInput], {
    nullable: true
  })
  OR?: ItemCategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesWhereInput], {
    nullable: true
  })
  NOT?: ItemCategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pocket_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsRelationFilter, {
    nullable: true
  })
  pocket?: ItemPocketsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsListRelationFilter, {
    nullable: true
  })
  items?: ItemsListRelationFilter | undefined;
}
