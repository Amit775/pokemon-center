import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesListRelationFilter } from "../inputs/ItemCategoriesListRelationFilter";
import { ItemPocketsWhereInput } from "../inputs/ItemPocketsWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemPocketsWhereUniqueInput", {})
export class ItemPocketsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsWhereInput], {
    nullable: true
  })
  AND?: ItemPocketsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsWhereInput], {
    nullable: true
  })
  OR?: ItemPocketsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsWhereInput], {
    nullable: true
  })
  NOT?: ItemPocketsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesListRelationFilter, {
    nullable: true
  })
  categories?: ItemCategoriesListRelationFilter | undefined;
}
