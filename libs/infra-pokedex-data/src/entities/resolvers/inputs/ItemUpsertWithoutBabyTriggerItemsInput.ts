import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutBabyTriggerItemsInput } from "../inputs/ItemCreateWithoutBabyTriggerItemsInput";
import { ItemUpdateWithoutBabyTriggerItemsInput } from "../inputs/ItemUpdateWithoutBabyTriggerItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutBabyTriggerItemsInput", {})
export class ItemUpsertWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutBabyTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutBabyTriggerItemsInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
