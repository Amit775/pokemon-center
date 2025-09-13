import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateManyWithoutPokemonNestedInput } from "../inputs/EncountersUpdateManyWithoutPokemonNestedInput";
import { PokemonAbilitiesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonAbilitiesUpdateManyWithoutPokemonNestedInput";
import { PokemonFormsUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonFormsUpdateManyWithoutPokemonNestedInput";
import { PokemonGameIndicesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonGameIndicesUpdateManyWithoutPokemonNestedInput";
import { PokemonItemsUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonItemsUpdateManyWithoutPokemonNestedInput";
import { PokemonMovesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonMovesUpdateManyWithoutPokemonNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput";
import { PokemonTypesUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonTypesUpdateManyWithoutPokemonNestedInput";

@TypeGraphQL.InputType("PokemonUpdateWithoutStatsInput", {})
export class PokemonUpdateWithoutStatsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  height?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  weight?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  base_experience?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_default?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  forms?: PokemonFormsUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  abilities?: PokemonAbilitiesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  moves?: PokemonMovesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  types?: PokemonTypesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  items?: PokemonItemsUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndicesUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncountersUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  encounters?: EncountersUpdateManyWithoutPokemonNestedInput | undefined;
}
