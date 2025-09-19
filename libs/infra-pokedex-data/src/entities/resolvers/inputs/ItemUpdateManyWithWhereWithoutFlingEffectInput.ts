import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemScalarWhereInput } from "../inputs/ItemScalarWhereInput";
import { ItemUpdateManyMutationInput } from "../inputs/ItemUpdateManyMutationInput";

@TypeGraphQL.InputType("ItemUpdateManyWithWhereWithoutFlingEffectInput", {})
export class ItemUpdateManyWithWhereWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => ItemScalarWhereInput, {
    nullable: false
  })
  where!: ItemScalarWhereInput;

  @TypeGraphQL.Field(_type => ItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemUpdateManyMutationInput;
}
