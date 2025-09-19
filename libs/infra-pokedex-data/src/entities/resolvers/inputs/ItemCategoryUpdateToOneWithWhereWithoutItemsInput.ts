import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryUpdateWithoutItemsInput } from "../inputs/ItemCategoryUpdateWithoutItemsInput";
import { ItemCategoryWhereInput } from "../inputs/ItemCategoryWhereInput";

@TypeGraphQL.InputType("ItemCategoryUpdateToOneWithWhereWithoutItemsInput", {})
export class ItemCategoryUpdateToOneWithWhereWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  where?: ItemCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateWithoutItemsInput, {
    nullable: false
  })
  data!: ItemCategoryUpdateWithoutItemsInput;
}
