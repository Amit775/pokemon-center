import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCountAbilitiesArgs } from "./args/GenerationCountAbilitiesArgs";
import { GenerationCountItemGameIndicesArgs } from "./args/GenerationCountItemGameIndicesArgs";
import { GenerationCountLocationGameIndicesArgs } from "./args/GenerationCountLocationGameIndicesArgs";
import { GenerationCountMovesArgs } from "./args/GenerationCountMovesArgs";
import { GenerationCountPokemonFormGenerationsArgs } from "./args/GenerationCountPokemonFormGenerationsArgs";
import { GenerationCountPokemonSpeciesArgs } from "./args/GenerationCountPokemonSpeciesArgs";
import { GenerationCountTypeGameIndicesArgs } from "./args/GenerationCountTypeGameIndicesArgs";
import { GenerationCountTypesArgs } from "./args/GenerationCountTypesArgs";
import { GenerationCountVersionGroupsArgs } from "./args/GenerationCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("GenerationCount", {})
export class GenerationCount {
  pokemonSpecies!: number;
  moves!: number;
  types!: number;
  abilities!: number;
  pokemonFormGenerations!: number;
  itemGameIndices!: number;
  typeGameIndices!: number;
  locationGameIndices!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonSpecies",
    nullable: false
  })
  getPokemonSpecies(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountPokemonSpeciesArgs): number {
    return root.pokemonSpecies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountTypesArgs): number {
    return root.types;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "abilities",
    nullable: false
  })
  getAbilities(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountAbilitiesArgs): number {
    return root.abilities;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonFormGenerations",
    nullable: false
  })
  getPokemonFormGenerations(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountPokemonFormGenerationsArgs): number {
    return root.pokemonFormGenerations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "itemGameIndices",
    nullable: false
  })
  getItemGameIndices(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountItemGameIndicesArgs): number {
    return root.itemGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "typeGameIndices",
    nullable: false
  })
  getTypeGameIndices(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountTypeGameIndicesArgs): number {
    return root.typeGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "locationGameIndices",
    nullable: false
  })
  getLocationGameIndices(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountLocationGameIndicesArgs): number {
    return root.locationGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: GenerationCount, @TypeGraphQL.Args() args: GenerationCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
