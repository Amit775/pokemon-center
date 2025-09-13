import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemCategoriesListRelationFilter } from "../inputs/ItemCategoriesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemPocketsWhereInput", {})
export class ItemPocketsWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesListRelationFilter, {
    nullable: true
  })
  categories?: ItemCategoriesListRelationFilter | undefined;
}
