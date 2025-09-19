import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutBabyTriggerItemsInput } from "../inputs/ItemUpdateWithoutBabyTriggerItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutBabyTriggerItemsInput", {})
export class ItemUpdateToOneWithWhereWithoutBabyTriggerItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutBabyTriggerItemsInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutBabyTriggerItemsInput;
}
