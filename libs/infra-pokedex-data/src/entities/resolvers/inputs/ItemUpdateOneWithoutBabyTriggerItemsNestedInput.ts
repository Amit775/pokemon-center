import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateOrConnectWithoutBabyTriggerItemsInput";
import { ItemCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateWithoutBabyTriggerItemsInput";
import { ItemUpdateToOneWithWhereWithoutBabyTriggerItemsInput } from "../inputs/ItemUpdateToOneWithWhereWithoutBabyTriggerItemsInput";
import { ItemUpsertWithoutBabyTriggerItemsInput } from "../inputs/ItemUpsertWithoutBabyTriggerItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneWithoutBabyTriggerItemsNestedInput", {})
export class ItemUpdateOneWithoutBabyTriggerItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutBabyTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  disconnect?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  delete?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutBabyTriggerItemsInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutBabyTriggerItemsInput | undefined;
}
