import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketCreateWithoutCategoriesInput } from "../inputs/ItemPocketCreateWithoutCategoriesInput";
import { ItemPocketUpdateWithoutCategoriesInput } from "../inputs/ItemPocketUpdateWithoutCategoriesInput";
import { ItemPocketWhereInput } from "../inputs/ItemPocketWhereInput";

@TypeGraphQL.InputType("ItemPocketUpsertWithoutCategoriesInput", {})
export class ItemPocketUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: ItemPocketUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ItemPocketCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ItemPocketCreateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  where?: ItemPocketWhereInput | undefined;
}
