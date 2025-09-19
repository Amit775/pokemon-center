import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryUpdateManyWithoutPocketNestedInput } from "../inputs/ItemCategoryUpdateManyWithoutPocketNestedInput";

@TypeGraphQL.InputType("ItemPocketUpdateInput", {})
export class ItemPocketUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateManyWithoutPocketNestedInput, {
    nullable: true
  })
  categories?: ItemCategoryUpdateManyWithoutPocketNestedInput | undefined;
}
