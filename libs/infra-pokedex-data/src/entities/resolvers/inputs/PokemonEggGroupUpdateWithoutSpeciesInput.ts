import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EggGroupUpdateOneRequiredWithoutSpeciesNestedInput";

@TypeGraphQL.InputType("PokemonEggGroupUpdateWithoutSpeciesInput", {})
export class PokemonEggGroupUpdateWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EggGroupUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  eggGroup?: EggGroupUpdateOneRequiredWithoutSpeciesNestedInput | undefined;
}
