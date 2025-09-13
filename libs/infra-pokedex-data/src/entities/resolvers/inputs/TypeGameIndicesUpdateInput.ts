import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput";
import { TypesUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateInput", {})
export class TypeGameIndicesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput | undefined;
}
