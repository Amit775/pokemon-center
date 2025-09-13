import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapScalarWhereInput } from "../inputs/ItemFlagMapScalarWhereInput";
import { ItemFlagMapUpdateManyMutationInput } from "../inputs/ItemFlagMapUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemFlagMapUpdateManyWithWhereWithoutFlagInput", {})
export class ItemFlagMapUpdateManyWithWhereWithoutFlagInput {
  @TypeGraphQL.Field(_type => ItemFlagMapScalarWhereInput, {
    nullable: false
  })
  where!: ItemFlagMapScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemFlagMapUpdateManyMutationInput;
}
