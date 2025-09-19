import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateOneRequiredWithoutLocationGameIndicesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutLocationGameIndicesNestedInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateWithoutLocationInput", {})
export class LocationGameIndexUpdateWithoutLocationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutLocationGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutLocationGameIndicesNestedInput | undefined;
}
