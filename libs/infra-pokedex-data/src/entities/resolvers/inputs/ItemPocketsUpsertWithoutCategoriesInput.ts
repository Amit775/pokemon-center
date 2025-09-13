import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsCreateWithoutCategoriesInput } from "../inputs/ItemPocketsCreateWithoutCategoriesInput";
import { ItemPocketsUpdateWithoutCategoriesInput } from "../inputs/ItemPocketsUpdateWithoutCategoriesInput";
import { ItemPocketsWhereInput } from "../inputs/ItemPocketsWhereInput";

@TypeGraphQL.InputType("ItemPocketsUpsertWithoutCategoriesInput", {})
export class ItemPocketsUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketsUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: ItemPocketsUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ItemPocketsCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ItemPocketsCreateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  where?: ItemPocketsWhereInput | undefined;
}
