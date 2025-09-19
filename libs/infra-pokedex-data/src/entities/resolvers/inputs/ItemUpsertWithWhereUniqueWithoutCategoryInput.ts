import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutCategoryInput } from "../inputs/ItemCreateWithoutCategoryInput";
import { ItemUpdateWithoutCategoryInput } from "../inputs/ItemUpdateWithoutCategoryInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpsertWithWhereUniqueWithoutCategoryInput", {})
export class ItemUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: ItemCreateWithoutCategoryInput;
}
