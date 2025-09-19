import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedManyWithoutCategoryInput } from "../inputs/ItemCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("ItemCategoryCreateWithoutPocketInput", {})
export class ItemCategoryCreateWithoutPocketInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ItemCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  items?: ItemCreateNestedManyWithoutCategoryInput | undefined;
}
