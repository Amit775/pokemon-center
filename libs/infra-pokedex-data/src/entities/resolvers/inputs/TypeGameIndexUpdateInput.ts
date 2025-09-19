import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateOneRequiredWithoutTypeGameIndicesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutTypeGameIndicesNestedInput";
import { TypeUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("TypeGameIndexUpdateInput", {})
export class TypeGameIndexUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutTypeGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutTypeGameIndicesNestedInput | undefined;
}
