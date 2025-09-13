import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/ItemsUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("ItemGameIndicesUpdateWithoutGenerationInput", {})
export class ItemGameIndicesUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  item?: ItemsUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;
}
