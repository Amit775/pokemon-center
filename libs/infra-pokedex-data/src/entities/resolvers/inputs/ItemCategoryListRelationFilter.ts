import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryWhereInput } from "../inputs/ItemCategoryWhereInput";

@TypeGraphQL.InputType("ItemCategoryListRelationFilter", {})
export class ItemCategoryListRelationFilter {
  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  every?: ItemCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  some?: ItemCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  none?: ItemCategoryWhereInput | undefined;
}
