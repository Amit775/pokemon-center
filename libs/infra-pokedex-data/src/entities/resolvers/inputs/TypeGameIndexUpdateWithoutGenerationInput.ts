import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("TypeGameIndexUpdateWithoutGenerationInput", {})
export class TypeGameIndexUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;
}
