import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateWithoutHeldItemsInput } from "../inputs/ItemUpdateWithoutHeldItemsInput";
import { ItemWhereInput } from "../inputs/ItemWhereInput";

@TypeGraphQL.InputType("ItemUpdateToOneWithWhereWithoutHeldItemsInput", {})
export class ItemUpdateToOneWithWhereWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateWithoutHeldItemsInput, {
    nullable: false
  })
  data!: ItemUpdateWithoutHeldItemsInput;
}
