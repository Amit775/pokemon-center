import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCountEncounterSlotsArgs } from "./args/VersionGroupCountEncounterSlotsArgs";
import { VersionGroupCountMachinesArgs } from "./args/VersionGroupCountMachinesArgs";
import { VersionGroupCountPokedexVersionGroupsArgs } from "./args/VersionGroupCountPokedexVersionGroupsArgs";
import { VersionGroupCountPokemonFormsArgs } from "./args/VersionGroupCountPokemonFormsArgs";
import { VersionGroupCountPokemonMovesArgs } from "./args/VersionGroupCountPokemonMovesArgs";
import { VersionGroupCountVersionGroupPokemonMoveMethodsArgs } from "./args/VersionGroupCountVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupCountVersionGroupRegionsArgs } from "./args/VersionGroupCountVersionGroupRegionsArgs";
import { VersionGroupCountVersionsArgs } from "./args/VersionGroupCountVersionsArgs";

@TypeGraphQL.ObjectType("VersionGroupCount", {})
export class VersionGroupCount {
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
  getVersions(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountVersionsArgs): number {
    return root.versions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounterSlots",
    nullable: false
  })
  getEncounterSlots(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountEncounterSlotsArgs): number {
    return root.encounterSlots;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "machines",
    nullable: false
  })
  getMachines(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountMachinesArgs): number {
    return root.machines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroupPokemonMoveMethods",
    nullable: false
  })
  getVersionGroupPokemonMoveMethods(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountVersionGroupPokemonMoveMethodsArgs): number {
    return root.versionGroupPokemonMoveMethods;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroupRegions",
    nullable: false
  })
  getVersionGroupRegions(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountVersionGroupRegionsArgs): number {
    return root.versionGroupRegions;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokedexVersionGroups",
    nullable: false
  })
  getPokedexVersionGroups(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountPokedexVersionGroupsArgs): number {
    return root.pokedexVersionGroups;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonMoves",
    nullable: false
  })
  getPokemonMoves(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountPokemonMovesArgs): number {
    return root.pokemonMoves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonForms",
    nullable: false
  })
  getPokemonForms(@TypeGraphQL.Root() root: VersionGroupCount, @TypeGraphQL.Args() args: VersionGroupCountPokemonFormsArgs): number {
    return root.pokemonForms;
  }
}
