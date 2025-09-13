import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesWhereInput } from "../inputs/ItemCategoriesWhereInput";

@TypeGraphQL.InputType("ItemCategoriesRelationFilter", {})
export class ItemCategoriesRelationFilter {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  is?: ItemCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  isNot?: ItemCategoriesWhereInput | undefined;
}
