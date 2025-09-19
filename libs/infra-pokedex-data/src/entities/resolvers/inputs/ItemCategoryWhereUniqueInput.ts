import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemCategoryWhereInput } from "../inputs/ItemCategoryWhereInput";
import { ItemListRelationFilter } from "../inputs/ItemListRelationFilter";
import { ItemPocketRelationFilter } from "../inputs/ItemPocketRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemCategoryWhereUniqueInput", {})
export class ItemCategoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereInput], {
    nullable: true
  })
  AND?: ItemCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereInput], {
    nullable: true
  })
  OR?: ItemCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryWhereInput], {
    nullable: true
  })
  NOT?: ItemCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pocket_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemPocketRelationFilter, {
    nullable: true
  })
  pocket?: ItemPocketRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemListRelationFilter, {
    nullable: true
  })
  items?: ItemListRelationFilter | undefined;
}
