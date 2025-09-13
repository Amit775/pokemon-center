import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutTypesNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutTypesNestedInput";

@TypeGraphQL.InputType("PokemonTypesUpdateWithoutTypeInput", {})
export class PokemonTypesUpdateWithoutTypeInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutTypesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutTypesNestedInput | undefined;
}
