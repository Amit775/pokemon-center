import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesUpdateManyWithoutPocketNestedInput } from "../inputs/ItemCategoriesUpdateManyWithoutPocketNestedInput";

@TypeGraphQL.InputType("ItemPocketsUpdateInput", {})
export class ItemPocketsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateManyWithoutPocketNestedInput, {
    nullable: true
  })
  categories?: ItemCategoriesUpdateManyWithoutPocketNestedInput | undefined;
}
