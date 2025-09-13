import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCountEncountersArgs } from "./args/VersionsCountEncountersArgs";
import { VersionsCountLocationAreaEncounterRatesArgs } from "./args/VersionsCountLocationAreaEncounterRatesArgs";
import { VersionsCountPokemonGameIndicesArgs } from "./args/VersionsCountPokemonGameIndicesArgs";
import { VersionsCountPokemonItemsArgs } from "./args/VersionsCountPokemonItemsArgs";

@TypeGraphQL.ObjectType("VersionsCount", {})
export class VersionsCount {
  encounters!: number;
  pokemonItems!: number;
  pokemonGameIndices!: number;
  locationAreaEncounterRates!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: VersionsCount, @TypeGraphQL.Args() args: VersionsCountEncountersArgs): number {
    return root.encounters;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonItems",
    nullable: false
  })
  getPokemonItems(@TypeGraphQL.Root() root: VersionsCount, @TypeGraphQL.Args() args: VersionsCountPokemonItemsArgs): number {
    return root.pokemonItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonGameIndices",
    nullable: false
  })
  getPokemonGameIndices(@TypeGraphQL.Root() root: VersionsCount, @TypeGraphQL.Args() args: VersionsCountPokemonGameIndicesArgs): number {
    return root.pokemonGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "locationAreaEncounterRates",
    nullable: false
  })
  getLocationAreaEncounterRates(@TypeGraphQL.Root() root: VersionsCount, @TypeGraphQL.Args() args: VersionsCountLocationAreaEncounterRatesArgs): number {
    return root.locationAreaEncounterRates;
  }
}
