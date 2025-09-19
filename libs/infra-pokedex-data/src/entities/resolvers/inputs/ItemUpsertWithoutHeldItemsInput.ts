import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateWithoutHeldItemsInput } from "../inputs/ItemCreateWithoutHeldItemsInput";
import { ItemUpdateWithoutHeldItemsInput } from "../inputs/ItemUpdateWithoutHeldItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpsertWithoutHeldItemsInput", {})
export class ItemUpsertWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemUpdateWithoutHeldItemsInput, {
    nullable: false
  })
  update!: ItemUpdateWithoutHeldItemsInput;

  @TypeGraphQL.Field(_type => ItemCreateWithoutHeldItemsInput, {
    nullable: false
  })
  create!: ItemCreateWithoutHeldItemsInput;

  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;
}
