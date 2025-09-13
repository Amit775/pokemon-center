import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput";
import { ItemsUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateInput", {})
export class ItemGameIndicesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput | undefined;
}
