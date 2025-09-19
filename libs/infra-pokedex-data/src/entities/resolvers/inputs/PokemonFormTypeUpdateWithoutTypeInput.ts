import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/PokemonFormUpdateOneRequiredWithoutTypesNestedInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateWithoutTypeInput", {})
export class PokemonFormTypeUpdateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  pokemonForm?: PokemonFormUpdateOneRequiredWithoutTypesNestedInput | undefined;
}
