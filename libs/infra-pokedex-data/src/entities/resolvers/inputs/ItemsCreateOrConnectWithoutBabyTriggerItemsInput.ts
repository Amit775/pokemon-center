import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateWithoutBabyTriggerItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateOrConnectWithoutBabyTriggerItemsInput", {})
export class ItemsCreateOrConnectWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutBabyTriggerItemsInput;
}
