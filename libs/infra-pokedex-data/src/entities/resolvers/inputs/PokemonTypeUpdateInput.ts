import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutTypesNestedInput";
import { TypeUpdateOneRequiredWithoutPokemonTypesNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutPokemonTypesNestedInput";

@TypeGraphQL.InputType("PokemonTypeUpdateInput", {})
export class PokemonTypeUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutPokemonTypesNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutPokemonTypesNestedInput | undefined;
}
