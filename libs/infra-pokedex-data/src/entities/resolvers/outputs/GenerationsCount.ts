import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCountAbilitiesArgs } from "./args/GenerationsCountAbilitiesArgs";
import { GenerationsCountItemGameIndicesArgs } from "./args/GenerationsCountItemGameIndicesArgs";
import { GenerationsCountLocationGameIndicesArgs } from "./args/GenerationsCountLocationGameIndicesArgs";
import { GenerationsCountMovesArgs } from "./args/GenerationsCountMovesArgs";
import { GenerationsCountPokemonFormGenerationsArgs } from "./args/GenerationsCountPokemonFormGenerationsArgs";
import { GenerationsCountPokemonSpeciesArgs } from "./args/GenerationsCountPokemonSpeciesArgs";
import { GenerationsCountTypeGameIndicesArgs } from "./args/GenerationsCountTypeGameIndicesArgs";
import { GenerationsCountTypesArgs } from "./args/GenerationsCountTypesArgs";
import { GenerationsCountVersionGroupsArgs } from "./args/GenerationsCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("GenerationsCount", {})
export class GenerationsCount {
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
  getPokemonSpecies(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountPokemonSpeciesArgs): number {
    return root.pokemonSpecies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "moves",
    nullable: false
  })
  getMoves(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountMovesArgs): number {
    return root.moves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "types",
    nullable: false
  })
  getTypes(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountTypesArgs): number {
    return root.types;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "abilities",
    nullable: false
  })
  getAbilities(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountAbilitiesArgs): number {
    return root.abilities;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonFormGenerations",
    nullable: false
  })
  getPokemonFormGenerations(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountPokemonFormGenerationsArgs): number {
    return root.pokemonFormGenerations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "itemGameIndices",
    nullable: false
  })
  getItemGameIndices(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountItemGameIndicesArgs): number {
    return root.itemGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "typeGameIndices",
    nullable: false
  })
  getTypeGameIndices(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountTypeGameIndicesArgs): number {
    return root.typeGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "locationGameIndices",
    nullable: false
  })
  getLocationGameIndices(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountLocationGameIndicesArgs): number {
    return root.locationGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: GenerationsCount, @TypeGraphQL.Args() args: GenerationsCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
