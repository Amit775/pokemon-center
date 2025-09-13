import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCountDexNumbersArgs } from "./args/PokemonSpeciesCountDexNumbersArgs";
import { PokemonSpeciesCountEggGroupsArgs } from "./args/PokemonSpeciesCountEggGroupsArgs";
import { PokemonSpeciesCountEvolutionArgs } from "./args/PokemonSpeciesCountEvolutionArgs";
import { PokemonSpeciesCountEvolvesToArgs } from "./args/PokemonSpeciesCountEvolvesToArgs";
import { PokemonSpeciesCountPartySpeciesArgs } from "./args/PokemonSpeciesCountPartySpeciesArgs";
import { PokemonSpeciesCountPokemonArgs } from "./args/PokemonSpeciesCountPokemonArgs";
import { PokemonSpeciesCountTradeSpeciesArgs } from "./args/PokemonSpeciesCountTradeSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonSpeciesCount", {})
export class PokemonSpeciesCount {
  evolvesTo!: number;
  pokemon!: number;
  eggGroups!: number;
  dexNumbers!: number;
  evolution!: number;
  partySpecies!: number;
  tradeSpecies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolvesTo",
    nullable: false
  })
  getEvolvesTo(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountEvolvesToArgs): number {
    return root.evolvesTo;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemon",
    nullable: false
  })
  getPokemon(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountPokemonArgs): number {
    return root.pokemon;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "eggGroups",
    nullable: false
  })
  getEggGroups(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountEggGroupsArgs): number {
    return root.eggGroups;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "dexNumbers",
    nullable: false
  })
  getDexNumbers(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountDexNumbersArgs): number {
    return root.dexNumbers;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "evolution",
    nullable: false
  })
  getEvolution(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountEvolutionArgs): number {
    return root.evolution;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "partySpecies",
    nullable: false
  })
  getPartySpecies(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountPartySpeciesArgs): number {
    return root.partySpecies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tradeSpecies",
    nullable: false
  })
  getTradeSpecies(@TypeGraphQL.Root() root: PokemonSpeciesCount, @TypeGraphQL.Args() args: PokemonSpeciesCountTradeSpeciesArgs): number {
    return root.tradeSpecies;
  }
}
