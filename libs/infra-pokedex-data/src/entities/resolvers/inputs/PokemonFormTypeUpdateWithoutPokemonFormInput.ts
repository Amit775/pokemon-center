import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateOneRequiredWithoutFormTypesNestedInput } from "../inputs/TypeUpdateOneRequiredWithoutFormTypesNestedInput";

@TypeGraphQL.InputType("PokemonFormTypeUpdateWithoutPokemonFormInput", {})
export class PokemonFormTypeUpdateWithoutPokemonFormInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateOneRequiredWithoutFormTypesNestedInput, {
    nullable: true
  })
  type?: TypeUpdateOneRequiredWithoutFormTypesNestedInput | undefined;
}
