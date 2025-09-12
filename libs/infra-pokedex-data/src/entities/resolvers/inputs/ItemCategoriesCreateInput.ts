import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsCreateNestedOneWithoutCategoriesInput } from "../inputs/ItemPocketsCreateNestedOneWithoutCategoriesInput";
import { ItemsCreateNestedManyWithoutCategoryInput } from "../inputs/ItemsCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("ItemCategoriesCreateInput", {})
export class ItemCategoriesCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemPocketsCreateNestedOneWithoutCategoriesInput, {
    nullable: false
  })
  pocket!: ItemPocketsCreateNestedOneWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ItemsCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  items?: ItemsCreateNestedManyWithoutCategoryInput | undefined;
}
