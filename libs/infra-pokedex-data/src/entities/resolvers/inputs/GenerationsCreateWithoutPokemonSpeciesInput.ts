import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCreateNestedManyWithoutGenerationInput } from "../inputs/AbilitiesCreateNestedManyWithoutGenerationInput";
import { ItemGameIndicesCreateNestedManyWithoutGenerationInput } from "../inputs/ItemGameIndicesCreateNestedManyWithoutGenerationInput";
import { LocationGameIndicesCreateNestedManyWithoutGenerationInput } from "../inputs/LocationGameIndicesCreateNestedManyWithoutGenerationInput";
import { MovesCreateNestedManyWithoutGenerationInput } from "../inputs/MovesCreateNestedManyWithoutGenerationInput";
import { PokemonFormGenerationsCreateNestedManyWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateNestedManyWithoutGenerationInput";
import { RegionsCreateNestedOneWithoutGenerationsInput } from "../inputs/RegionsCreateNestedOneWithoutGenerationsInput";
import { TypeGameIndicesCreateNestedManyWithoutGenerationInput } from "../inputs/TypeGameIndicesCreateNestedManyWithoutGenerationInput";
import { TypesCreateNestedManyWithoutGenerationInput } from "../inputs/TypesCreateNestedManyWithoutGenerationInput";
import { VersionGroupsCreateNestedManyWithoutGenerationInput } from "../inputs/VersionGroupsCreateNestedManyWithoutGenerationInput";

@TypeGraphQL.InputType("GenerationsCreateWithoutPokemonSpeciesInput", {})
export class GenerationsCreateWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => RegionsCreateNestedOneWithoutGenerationsInput, {
    nullable: false
  })
  region!: RegionsCreateNestedOneWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => MovesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  moves?: MovesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  types?: TypesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  abilities?: AbilitiesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationsCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndicesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndicesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndicesCreateNestedManyWithoutGenerationInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedManyWithoutGenerationInput, {
    nullable: true
  })
  versionGroups?: VersionGroupsCreateNestedManyWithoutGenerationInput | undefined;
}
