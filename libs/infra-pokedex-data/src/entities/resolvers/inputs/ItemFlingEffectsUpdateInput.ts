import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateManyWithoutFlingEffectNestedInput } from "../inputs/ItemsUpdateManyWithoutFlingEffectNestedInput";

@TypeGraphQL.InputType("ItemFlingEffectsUpdateInput", {})
export class ItemFlingEffectsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateManyWithoutFlingEffectNestedInput, {
    nullable: true
  })
  items?: ItemsUpdateManyWithoutFlingEffectNestedInput | undefined;
}
