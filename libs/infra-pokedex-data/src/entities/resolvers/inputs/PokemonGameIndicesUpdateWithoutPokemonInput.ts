import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput } from "../inputs/VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateWithoutPokemonInput", {})
export class PokemonGameIndicesUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput, {
    nullable: true
  })
  version?: VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput | undefined;
}
