import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateOneRequiredWithoutItemGameIndicesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutItemGameIndicesNestedInput";
import { ItemUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/ItemUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("ItemGameIndexUpdateInput", {})
export class ItemGameIndexUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  item?: ItemUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutItemGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutItemGameIndicesNestedInput | undefined;
}
