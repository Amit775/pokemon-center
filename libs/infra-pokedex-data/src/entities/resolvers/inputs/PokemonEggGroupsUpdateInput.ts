import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateInput", {})
export class PokemonEggGroupsUpdateInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  eggGroup?: EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput | undefined;
}
