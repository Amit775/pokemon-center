import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateOrConnectWithoutBabyTriggerItemsInput";
import { ItemsCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateWithoutBabyTriggerItemsInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsCreateNestedOneWithoutBabyTriggerItemsInput", {})
export class ItemsCreateNestedOneWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;
}
