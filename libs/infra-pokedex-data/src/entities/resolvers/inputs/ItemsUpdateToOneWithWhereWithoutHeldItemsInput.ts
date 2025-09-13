import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateWithoutHeldItemsInput } from "../inputs/ItemsUpdateWithoutHeldItemsInput";
import { ItemsWhereInput } from "../inputs/ItemsWhereInput";

@TypeGraphQL.InputType("ItemsUpdateToOneWithWhereWithoutHeldItemsInput", {})
export class ItemsUpdateToOneWithWhereWithoutHeldItemsInput {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateWithoutHeldItemsInput, {
    nullable: false
  })
  data!: ItemsUpdateWithoutHeldItemsInput;
}
