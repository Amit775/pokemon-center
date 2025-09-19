import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateWithoutGenerationInput", {})
export class LocationGameIndexUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;
}
