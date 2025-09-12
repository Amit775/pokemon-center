import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutCategoryInput } from "../inputs/ItemsUpdateWithoutCategoryInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateWithWhereUniqueWithoutCategoryInput", {})
export class ItemsUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutCategoryInput;
}
