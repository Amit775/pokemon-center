import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsUpdateWithoutCategoriesInput } from "../inputs/ItemPocketsUpdateWithoutCategoriesInput";
import { ItemPocketsWhereInput } from "../inputs/ItemPocketsWhereInput";

@TypeGraphQL.InputType("ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput", {})
export class ItemPocketsUpdateToOneWithWhereWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  where?: ItemPocketsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: ItemPocketsUpdateWithoutCategoriesInput;
}
