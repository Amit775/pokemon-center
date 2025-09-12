import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationGameIndicesUpdateManyWithoutLocationNestedInput } from "../inputs/LocationGameIndicesUpdateManyWithoutLocationNestedInput";
import { PokemonEvolutionUpdateManyWithoutLocationNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutLocationNestedInput";
import { RegionsUpdateOneWithoutLocationsNestedInput } from "../inputs/RegionsUpdateOneWithoutLocationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("LocationsUpdateWithoutAreasInput", {})
export class LocationsUpdateWithoutAreasInput {
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

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  gameIndices?: LocationGameIndicesUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutLocationNestedInput | undefined;
}
