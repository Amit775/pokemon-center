import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonDexNumbersUpdateManyWithoutPokedexNestedInput } from "../inputs/PokemonDexNumbersUpdateManyWithoutPokedexNestedInput";
import { RegionsUpdateOneWithoutPokedexesNestedInput } from "../inputs/RegionsUpdateOneWithoutPokedexesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokedexesUpdateWithoutVersionGroupsInput", {})
export class PokedexesUpdateWithoutVersionGroupsInput {
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

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateManyWithoutPokedexNestedInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersUpdateManyWithoutPokedexNestedInput | undefined;
}
