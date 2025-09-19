import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateOneRequiredWithoutPokemonTypesNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutPokemonTypesNestedInput";

@TypeGraphQL.InputType("PokemonTypeUpdateWithoutPokemonInput", {})
export class PokemonTypeUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutPokemonTypesNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutPokemonTypesNestedInput | undefined;
}
