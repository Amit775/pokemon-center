import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput } from "../inputs/PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput";
import { RegionsUpdateOneWithoutPokedexesNestedInput } from "../inputs/RegionsUpdateOneWithoutPokedexesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokedexesUpdateWithoutDexNumbersInput", {})
export class PokedexesUpdateWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_main_series?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateOneWithoutPokedexesNestedInput, {
    nullable: true
  })
  region?: RegionsUpdateOneWithoutPokedexesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  versionGroups?: PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput | undefined;
}
