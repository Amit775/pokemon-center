import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesWhereInput } from "../inputs/ItemCategoriesWhereInput";

@TypeGraphQL.InputType("ItemCategoriesListRelationFilter", {})
export class ItemCategoriesListRelationFilter {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  every?: ItemCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  some?: ItemCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  none?: ItemCategoriesWhereInput | undefined;
}
