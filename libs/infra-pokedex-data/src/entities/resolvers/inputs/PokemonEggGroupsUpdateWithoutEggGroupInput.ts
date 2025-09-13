import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateWithoutEggGroupInput", {})
export class PokemonEggGroupsUpdateWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput | undefined;
}
