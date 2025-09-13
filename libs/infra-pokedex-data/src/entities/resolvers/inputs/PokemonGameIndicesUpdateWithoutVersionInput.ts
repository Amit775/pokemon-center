import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("PokemonGameIndicesUpdateWithoutVersionInput", {})
export class PokemonGameIndicesUpdateWithoutVersionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;
}
