import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryScalarWhereInput } from "../inputs/ItemCategoryScalarWhereInput";
import { ItemCategoryUpdateManyMutationInput } from "../inputs/ItemCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemCategoryUpdateManyWithWhereWithoutPocketInput", {})
export class ItemCategoryUpdateManyWithWhereWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoryScalarWhereInput, {
    nullable: false
  })
  where!: ItemCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemCategoryUpdateManyMutationInput;
}
