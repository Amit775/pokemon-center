import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityUpdateManyWithoutGenerationNestedInput } from "../inputs/AbilityUpdateManyWithoutGenerationNestedInput";
import { ItemGameIndexUpdateManyWithoutGenerationNestedInput } from "../inputs/ItemGameIndexUpdateManyWithoutGenerationNestedInput";
import { LocationGameIndexUpdateManyWithoutGenerationNestedInput } from "../inputs/LocationGameIndexUpdateManyWithoutGenerationNestedInput";
import { MoveUpdateManyWithoutGenerationNestedInput } from "../inputs/MoveUpdateManyWithoutGenerationNestedInput";
import { PokemonFormGenerationUpdateManyWithoutGenerationNestedInput } from "../inputs/PokemonFormGenerationUpdateManyWithoutGenerationNestedInput";
import { PokemonSpeciesUpdateManyWithoutGenerationNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutGenerationNestedInput";
import { RegionUpdateOneRequiredWithoutGenerationsNestedInput } from "../inputs/RegionUpdateOneRequiredWithoutGenerationsNestedInput";
import { TypeUpdateManyWithoutGenerationNestedInput } from "../inputs/TypeUpdateManyWithoutGenerationNestedInput";
import { VersionGroupUpdateManyWithoutGenerationNestedInput } from "../inputs/VersionGroupUpdateManyWithoutGenerationNestedInput";

@TypeGraphQL.InputType("GenerationUpdateWithoutTypeGameIndicesInput", {})
export class GenerationUpdateWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneRequiredWithoutGenerationsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneRequiredWithoutGenerationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  moves?: MoveUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  types?: TypeUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => AbilityUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  abilities?: AbilityUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndexUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndexUpdateManyWithoutGenerationNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateManyWithoutGenerationNestedInput, {
    nullable: true
  })
  versionGroups?: VersionGroupUpdateManyWithoutGenerationNestedInput | undefined;
}
