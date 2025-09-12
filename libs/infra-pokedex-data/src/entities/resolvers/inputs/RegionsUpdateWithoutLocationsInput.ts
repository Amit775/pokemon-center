import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateManyWithoutRegionNestedInput } from "../inputs/GenerationsUpdateManyWithoutRegionNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokedexesUpdateManyWithoutRegionNestedInput } from "../inputs/PokedexesUpdateManyWithoutRegionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VersionGroupRegionsUpdateManyWithoutRegionNestedInput } from "../inputs/VersionGroupRegionsUpdateManyWithoutRegionNestedInput";

@TypeGraphQL.InputType("RegionsUpdateWithoutLocationsInput", {})
export class RegionsUpdateWithoutLocationsInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  generations?: GenerationsUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  pokedexes?: PokedexesUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  versionGroups?: VersionGroupRegionsUpdateManyWithoutRegionNestedInput | undefined;
}
