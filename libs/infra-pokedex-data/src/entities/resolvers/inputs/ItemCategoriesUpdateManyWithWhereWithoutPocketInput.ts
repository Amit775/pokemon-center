import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesScalarWhereInput } from "../inputs/ItemCategoriesScalarWhereInput";
import { ItemCategoriesUpdateManyMutationInput } from "../inputs/ItemCategoriesUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateManyWithWhereWithoutPocketInput", {})
export class ItemCategoriesUpdateManyWithWhereWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoriesScalarWhereInput, {
    nullable: false
  })
  where!: ItemCategoriesScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemCategoriesUpdateManyMutationInput;
}
