import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput";

@TypeGraphQL.InputType("PokemonEggGroupsUpdateWithoutSpeciesInput", {})
export class PokemonEggGroupsUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  eggGroup?: EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput | undefined;
}
