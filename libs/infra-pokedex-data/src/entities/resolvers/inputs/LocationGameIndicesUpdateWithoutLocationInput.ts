import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateWithoutLocationInput", {})
export class LocationGameIndicesUpdateWithoutLocationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput | undefined;
}
