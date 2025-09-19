import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutCategoryInput } from "../inputs/ItemUpdateWithoutCategoryInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateWithWhereUniqueWithoutCategoryInput", {})
export class ItemUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutCategoryInput;
}
