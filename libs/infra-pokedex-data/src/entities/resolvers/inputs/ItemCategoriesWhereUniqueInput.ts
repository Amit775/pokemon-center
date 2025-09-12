import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemCategoriesWhereInput } from "../inputs/ItemCategoriesWhereInput";
import { ItemPocketsRelationFilter } from "../inputs/ItemPocketsRelationFilter";
import { ItemsListRelationFilter } from "../inputs/ItemsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemCategoriesWhereUniqueInput", {})
export class ItemCategoriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
