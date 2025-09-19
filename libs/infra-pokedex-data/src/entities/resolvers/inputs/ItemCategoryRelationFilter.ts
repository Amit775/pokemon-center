import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryWhereInput } from "../inputs/ItemCategoryWhereInput";

@TypeGraphQL.InputType("ItemCategoryRelationFilter", {})
export class ItemCategoryRelationFilter {
  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  is?: ItemCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  isNot?: ItemCategoryWhereInput | undefined;
}
