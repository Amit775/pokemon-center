import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateUpdateManyWithoutVersionNestedInput } from "../inputs/LocationAreaEncounterRateUpdateManyWithoutVersionNestedInput";
import { PokemonGameIndexUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonGameIndexUpdateManyWithoutVersionNestedInput";
import { PokemonItemUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonItemUpdateManyWithoutVersionNestedInput";
import { VersionGroupUpdateOneRequiredWithoutVersionsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutVersionsNestedInput";

@TypeGraphQL.InputType("VersionUpdateWithoutEncountersInput", {})
export class VersionUpdateWithoutEncountersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutVersionsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutVersionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemUpdateManyWithoutVersionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndexUpdateManyWithoutVersionNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRateUpdateManyWithoutVersionNestedInput | undefined;
}
