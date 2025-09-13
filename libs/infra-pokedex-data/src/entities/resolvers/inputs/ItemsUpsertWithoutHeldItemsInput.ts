import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateWithoutHeldItemsInput } from "../inputs/ItemsCreateWithoutHeldItemsInput";
import { ItemsUpdateWithoutHeldItemsInput } from "../inputs/ItemsUpdateWithoutHeldItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpsertWithoutHeldItemsInput", {})
export class ItemsUpsertWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemsUpdateWithoutHeldItemsInput, {
    nullable: false
  })
  update!: ItemsUpdateWithoutHeldItemsInput;

  @TypeGraphQL.Field(_type => ItemsCreateWithoutHeldItemsInput, {
    nullable: false
  })
  create!: ItemsCreateWithoutHeldItemsInput;

  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;
}
