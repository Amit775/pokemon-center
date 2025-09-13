import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateOrConnectWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateOrConnectWithoutBabyTriggerItemsInput";
import { ItemsCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateWithoutBabyTriggerItemsInput";
import { ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput } from "../inputs/ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput";
import { ItemsUpsertWithoutBabyTriggerItemsInput } from "../inputs/ItemsUpsertWithoutBabyTriggerItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";
import { ItemsWhereUniqueInput } from "../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.InputType("ItemsUpdateOneWithoutBabyTriggerItemsNestedInput", {})
export class ItemsUpdateOneWithoutBabyTriggerItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemsCreateWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  create?: ItemsCreateWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsCreateOrConnectWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemsCreateOrConnectWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpsertWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  upsert?: ItemsUpsertWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  disconnect?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  delete?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  update?: ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput | undefined;
}
