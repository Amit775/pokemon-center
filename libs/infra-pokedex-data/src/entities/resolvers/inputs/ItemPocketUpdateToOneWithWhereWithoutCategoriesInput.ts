import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketUpdateWithoutCategoriesInput } from "../inputs/ItemPocketUpdateWithoutCategoriesInput";
import { ItemPocketWhereInput } from "../inputs/ItemPocketWhereInput";

@TypeGraphQL.InputType("ItemPocketUpdateToOneWithWhereWithoutCategoriesInput", {})
export class ItemPocketUpdateToOneWithWhereWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  where?: ItemPocketWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: ItemPocketUpdateWithoutCategoriesInput;
}
