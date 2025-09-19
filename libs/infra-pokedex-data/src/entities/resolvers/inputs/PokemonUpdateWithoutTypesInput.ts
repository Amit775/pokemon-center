import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateManyWithoutPokemonNestedInput } from "../inputs/EncounterUpdateManyWithoutPokemonNestedInput";
import { PokemonAbilityUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonAbilityUpdateManyWithoutPokemonNestedInput";
import { PokemonFormUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonFormUpdateManyWithoutPokemonNestedInput";
import { PokemonGameIndexUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonGameIndexUpdateManyWithoutPokemonNestedInput";
import { PokemonItemUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonItemUpdateManyWithoutPokemonNestedInput";
import { PokemonMoveUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonMoveUpdateManyWithoutPokemonNestedInput";
import { PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput } from "../inputs/PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput";
import { PokemonStatUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonStatUpdateManyWithoutPokemonNestedInput";

@TypeGraphQL.InputType("PokemonUpdateWithoutTypesInput", {})
export class PokemonUpdateWithoutTypesInput {
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

  @TypeGraphQL.Field(_type => PokemonFormUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  forms?: PokemonFormUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  abilities?: PokemonAbilityUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  moves?: PokemonMoveUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  stats?: PokemonStatUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  items?: PokemonItemUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndexUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  encounters?: EncounterUpdateManyWithoutPokemonNestedInput | undefined;
}
