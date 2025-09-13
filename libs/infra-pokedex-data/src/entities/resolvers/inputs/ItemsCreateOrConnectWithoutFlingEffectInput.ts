import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutFlingEffectInput } from "../inputs/ItemsCreateWithoutFlingEffectInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutFlingEffectInput", {})
export class ItemsCreateOrConnectWithoutFlingEffectInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutFlingEffectInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutFlingEffectInput;
}
