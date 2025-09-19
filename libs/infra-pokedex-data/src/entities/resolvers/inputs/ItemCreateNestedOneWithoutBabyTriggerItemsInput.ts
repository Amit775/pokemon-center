import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateOrConnectWithoutBabyTriggerItemsInput";
import { ItemCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateWithoutBabyTriggerItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemCreateNestedOneWithoutBabyTriggerItemsInput", {})
export class ItemCreateNestedOneWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;
}
