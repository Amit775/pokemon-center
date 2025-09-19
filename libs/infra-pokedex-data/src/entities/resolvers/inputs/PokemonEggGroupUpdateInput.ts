import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EggGroupUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateInput", {})
export class PokemonEggGroupUpdateInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  eggGroup?: EggGroupUpdateOneRequiredWithoutSpeciesNestedInput | undefined;
}
