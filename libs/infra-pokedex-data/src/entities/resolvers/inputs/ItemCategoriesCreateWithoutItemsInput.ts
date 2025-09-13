import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsCreateNestedOneWithoutCategoriesInput } from "../inputs/ItemPocketsCreateNestedOneWithoutCategoriesInput";

@TypeGraphQL.InputType("ItemCategoriesCreateWithoutItemsInput", {})
export class ItemCategoriesCreateWithoutItemsInput {
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
}
