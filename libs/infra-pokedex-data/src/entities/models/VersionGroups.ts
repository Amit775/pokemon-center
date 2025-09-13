import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterSlots } from "../models/EncounterSlots";
import { Generations } from "../models/Generations";
import { Machines } from "../models/Machines";
import { PokedexVersionGroups } from "../models/PokedexVersionGroups";
import { PokemonForms } from "../models/PokemonForms";
import { PokemonMoves } from "../models/PokemonMoves";
import { VersionGroupPokemonMoveMethods } from "../models/VersionGroupPokemonMoveMethods";
import { VersionGroupRegions } from "../models/VersionGroupRegions";
import { Versions } from "../models/Versions";
import { VersionGroupsCount } from "../resolvers/outputs/VersionGroupsCount";

@TypeGraphQL.ObjectType("VersionGroups", {})
export class VersionGroups {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  generation?: Generations;

  versions?: Versions[];

  encounterSlots?: EncounterSlots[];

  machines?: Machines[];

  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethods[];

  versionGroupRegions?: VersionGroupRegions[];

  pokedexVersionGroups?: PokedexVersionGroups[];

  pokemonMoves?: PokemonMoves[];

  pokemonForms?: PokemonForms[];

  @TypeGraphQL.Field(_type => VersionGroupsCount, {
    nullable: true
  })
  _count?: VersionGroupsCount | null;
}
