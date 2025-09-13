import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput";
import { PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput } from "../inputs/PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateInput", {})
export class PokemonFormGenerationsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutPokemonFormGenerationsNestedInput | undefined;
}
