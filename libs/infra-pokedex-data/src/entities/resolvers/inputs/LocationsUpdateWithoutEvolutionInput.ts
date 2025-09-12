import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationAreasUpdateManyWithoutLocationNestedInput } from "../inputs/LocationAreasUpdateManyWithoutLocationNestedInput";
import { LocationGameIndicesUpdateManyWithoutLocationNestedInput } from "../inputs/LocationGameIndicesUpdateManyWithoutLocationNestedInput";
import { RegionsUpdateOneWithoutLocationsNestedInput } from "../inputs/RegionsUpdateOneWithoutLocationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LocationsUpdateWithoutEvolutionInput", {})
export class LocationsUpdateWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateOneWithoutLocationsNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneWithoutLocationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  areas?: LocationAreasUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndicesUpdateManyWithoutLocationNestedInput | undefined;
}
