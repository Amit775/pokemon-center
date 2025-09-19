import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateWithoutBabyTriggerItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateOrConnectWithoutBabyTriggerItemsInput", {})
export class ItemCreateOrConnectWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: false
  })
  where!: ItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutBabyTriggerItemsInput;
}
