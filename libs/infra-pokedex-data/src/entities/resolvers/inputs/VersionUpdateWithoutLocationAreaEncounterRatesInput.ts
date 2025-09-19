import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateManyWithoutVersionNestedInput } from "../inputs/EncounterUpdateManyWithoutVersionNestedInput";
import { PokemonGameIndexUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonGameIndexUpdateManyWithoutVersionNestedInput";
import { PokemonItemUpdateManyWithoutVersionNestedInput } from "../inputs/PokemonItemUpdateManyWithoutVersionNestedInput";
import { VersionGroupUpdateOneRequiredWithoutVersionsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutVersionsNestedInput";

@TypeGraphQL.InputType("VersionUpdateWithoutLocationAreaEncounterRatesInput", {})
export class VersionUpdateWithoutLocationAreaEncounterRatesInput {
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

  @TypeGraphQL.Field(_type => EncounterUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  encounters?: EncounterUpdateManyWithoutVersionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemUpdateManyWithoutVersionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateManyWithoutVersionNestedInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndexUpdateManyWithoutVersionNestedInput | undefined;
}
