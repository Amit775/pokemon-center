import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Ability } from "../models/Ability";
import { ItemGameIndex } from "../models/ItemGameIndex";
import { LocationGameIndex } from "../models/LocationGameIndex";
import { Move } from "../models/Move";
import { PokemonFormGeneration } from "../models/PokemonFormGeneration";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { Region } from "../models/Region";
import { Type } from "../models/Type";
import { TypeGameIndex } from "../models/TypeGameIndex";
import { VersionGroup } from "../models/VersionGroup";
import { GenerationCount } from "../resolvers/outputs/GenerationCount";

@TypeGraphQL.ObjectType("Generation", {})
export class Generation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  main_region_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  region?: Region;

  pokemonSpecies?: PokemonSpecies[];

  moves?: Move[];

  types?: Type[];

  abilities?: Ability[];

  pokemonFormGenerations?: PokemonFormGeneration[];

  itemGameIndices?: ItemGameIndex[];

  typeGameIndices?: TypeGameIndex[];

  locationGameIndices?: LocationGameIndex[];

  versionGroups?: VersionGroup[];

  @TypeGraphQL.Field(_type => GenerationCount, {
    nullable: true
  })
  _count?: GenerationCount | null;
}
