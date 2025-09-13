import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsScalarWhereInput } from "../inputs/ItemsScalarWhereInput";
import { ItemsUpdateManyMutationInput } from "../inputs/ItemsUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemsUpdateManyWithWhereWithoutCategoryInput", {})
export class ItemsUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ItemsScalarWhereInput, {
    nullable: false
  })
  where!: ItemsScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemsUpdateManyMutationInput;
}
