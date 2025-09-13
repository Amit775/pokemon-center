import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCountEncounterSlotsArgs } from "./args/VersionGroupsCountEncounterSlotsArgs";
import { VersionGroupsCountMachinesArgs } from "./args/VersionGroupsCountMachinesArgs";
import { VersionGroupsCountPokedexVersionGroupsArgs } from "./args/VersionGroupsCountPokedexVersionGroupsArgs";
import { VersionGroupsCountPokemonFormsArgs } from "./args/VersionGroupsCountPokemonFormsArgs";
import { VersionGroupsCountPokemonMovesArgs } from "./args/VersionGroupsCountPokemonMovesArgs";
import { VersionGroupsCountVersionGroupPokemonMoveMethodsArgs } from "./args/VersionGroupsCountVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupsCountVersionGroupRegionsArgs } from "./args/VersionGroupsCountVersionGroupRegionsArgs";
import { VersionGroupsCountVersionsArgs } from "./args/VersionGroupsCountVersionsArgs";

@TypeGraphQL.ObjectType("VersionGroupsCount", {})
export class VersionGroupsCount {
  versions!: number;
  encounterSlots!: number;
  machines!: number;
  versionGroupPokemonMoveMethods!: number;
  versionGroupRegions!: number;
  pokedexVersionGroups!: number;
  pokemonMoves!: number;
  pokemonForms!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versions",
    nullable: false
  })
  getVersions(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountVersionsArgs): number {
    return root.versions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounterSlots",
    nullable: false
  })
  getEncounterSlots(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountEncounterSlotsArgs): number {
    return root.encounterSlots;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "machines",
    nullable: false
  })
  getMachines(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountMachinesArgs): number {
    return root.machines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroupPokemonMoveMethods",
    nullable: false
  })
  getVersionGroupPokemonMoveMethods(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountVersionGroupPokemonMoveMethodsArgs): number {
    return root.versionGroupPokemonMoveMethods;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroupRegions",
    nullable: false
  })
  getVersionGroupRegions(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountVersionGroupRegionsArgs): number {
    return root.versionGroupRegions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokedexVersionGroups",
    nullable: false
  })
  getPokedexVersionGroups(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountPokedexVersionGroupsArgs): number {
    return root.pokedexVersionGroups;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonMoves",
    nullable: false
  })
  getPokemonMoves(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountPokemonMovesArgs): number {
    return root.pokemonMoves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonForms",
    nullable: false
  })
  getPokemonForms(@TypeGraphQL.Root() root: VersionGroupsCount, @TypeGraphQL.Args() args: VersionGroupsCountPokemonFormsArgs): number {
    return root.pokemonForms;
  }
}
