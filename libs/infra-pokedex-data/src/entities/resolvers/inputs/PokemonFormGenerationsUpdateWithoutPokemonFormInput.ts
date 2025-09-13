import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateWithoutPokemonFormInput", {})
export class PokemonFormGenerationsUpdateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput | undefined;
}
