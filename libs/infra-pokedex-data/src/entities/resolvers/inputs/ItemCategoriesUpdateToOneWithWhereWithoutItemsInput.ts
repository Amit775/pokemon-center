import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesUpdateWithoutItemsInput } from "../inputs/ItemCategoriesUpdateWithoutItemsInput";
import { ItemCategoriesWhereInput } from "../inputs/ItemCategoriesWhereInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateToOneWithWhereWithoutItemsInput", {})
export class ItemCategoriesUpdateToOneWithWhereWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  where?: ItemCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateWithoutItemsInput, {
    nullable: false
  })
  data!: ItemCategoriesUpdateWithoutItemsInput;
}
