import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCreateNestedManyWithoutGenerationInput } from "../inputs/AbilityCreateNestedManyWithoutGenerationInput";
import { ItemGameIndexCreateNestedManyWithoutGenerationInput } from "../inputs/ItemGameIndexCreateNestedManyWithoutGenerationInput";
import { LocationGameIndexCreateNestedManyWithoutGenerationInput } from "../inputs/LocationGameIndexCreateNestedManyWithoutGenerationInput";
import { PokemonFormGenerationCreateNestedManyWithoutGenerationInput } from "../inputs/PokemonFormGenerationCreateNestedManyWithoutGenerationInput";
import { PokemonSpeciesCreateNestedManyWithoutGenerationInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutGenerationInput";
import { RegionCreateNestedOneWithoutGenerationsInput } from "../inputs/RegionCreateNestedOneWithoutGenerationsInput";
import { TypeCreateNestedManyWithoutGenerationInput } from "../inputs/TypeCreateNestedManyWithoutGenerationInput";
import { TypeGameIndexCreateNestedManyWithoutGenerationInput } from "../inputs/TypeGameIndexCreateNestedManyWithoutGenerationInput";
import { VersionGroupCreateNestedManyWithoutGenerationInput } from "../inputs/VersionGroupCreateNestedManyWithoutGenerationInput";

@TypeGraphQL.InputType("GenerationCreateWithoutMovesInput", {})
export class GenerationCreateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutGenerationsInput, {
    nullable: false
  })
  region!: RegionCreateNestedOneWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  types?: TypeCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => AbilityCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  abilities?: AbilityCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndexCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndexCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndexCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  versionGroups?: VersionGroupCreateNestedManyWithoutGenerationInput | undefined;
}
