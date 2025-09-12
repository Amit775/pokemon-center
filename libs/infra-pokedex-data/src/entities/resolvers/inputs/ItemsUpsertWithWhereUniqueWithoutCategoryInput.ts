import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutCategoryInput } from "../inputs/ItemsCreateWithoutCategoryInput";
import { ItemsUpdateWithoutCategoryInput } from "../inputs/ItemsUpdateWithoutCategoryInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpsertWithWhereUniqueWithoutCategoryInput", {})
export class ItemsUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutCategoryInput;
}
