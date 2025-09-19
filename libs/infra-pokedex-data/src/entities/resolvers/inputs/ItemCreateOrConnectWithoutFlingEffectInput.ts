import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutFlingEffectInput } from "../inputs/ItemCreateWithoutFlingEffectInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutFlingEffectInput", {})
export class ItemCreateOrConnectWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutFlingEffectInput, {
    nullable: false
  })
  create!: ItemCreateWithoutFlingEffectInput;
}
