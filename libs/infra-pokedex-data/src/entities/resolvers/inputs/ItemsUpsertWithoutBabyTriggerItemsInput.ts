import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemsCreateWithoutBabyTriggerItemsInput";
import { ItemsUpdateWithoutBabyTriggerItemsInput } from "../inputs/ItemsUpdateWithoutBabyTriggerItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutBabyTriggerItemsInput", {})
export class ItemsUpsertWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutBabyTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutBabyTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
