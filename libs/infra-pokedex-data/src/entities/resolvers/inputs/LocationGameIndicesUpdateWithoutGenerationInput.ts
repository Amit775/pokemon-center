import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationsUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/LocationsUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateWithoutGenerationInput", {})
export class LocationGameIndicesUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  location?: LocationsUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;
}
