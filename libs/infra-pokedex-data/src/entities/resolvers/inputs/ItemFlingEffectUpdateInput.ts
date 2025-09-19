import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemUpdateManyWithoutFlingEffectNestedInput } from "../inputs/ItemUpdateManyWithoutFlingEffectNestedInput";

@TypeGraphQL.InputType("ItemFlingEffectUpdateInput", {})
export class ItemFlingEffectUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateManyWithoutFlingEffectNestedInput, {
    nullable: true
  })
  items?: ItemUpdateManyWithoutFlingEffectNestedInput | undefined;
}
