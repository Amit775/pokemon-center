import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutGameIndicesNestedInput";
import { VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateInput", {})
export class PokemonGameIndicesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput | undefined;
}
