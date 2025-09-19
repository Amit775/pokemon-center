import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCountEncountersArgs } from "./args/VersionCountEncountersArgs";
import { VersionCountLocationAreaEncounterRatesArgs } from "./args/VersionCountLocationAreaEncounterRatesArgs";
import { VersionCountPokemonGameIndicesArgs } from "./args/VersionCountPokemonGameIndicesArgs";
import { VersionCountPokemonItemsArgs } from "./args/VersionCountPokemonItemsArgs";

@TypeGraphQL.ObjectType("VersionCount", {})
export class VersionCount {
  encounters!: number;
  pokemonItems!: number;
  pokemonGameIndices!: number;
  locationAreaEncounterRates!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: VersionCount, @TypeGraphQL.Args() args: VersionCountEncountersArgs): number {
    return root.encounters;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonItems",
    nullable: false
  })
  getPokemonItems(@TypeGraphQL.Root() root: VersionCount, @TypeGraphQL.Args() args: VersionCountPokemonItemsArgs): number {
    return root.pokemonItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonGameIndices",
    nullable: false
  })
  getPokemonGameIndices(@TypeGraphQL.Root() root: VersionCount, @TypeGraphQL.Args() args: VersionCountPokemonGameIndicesArgs): number {
    return root.pokemonGameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "locationAreaEncounterRates",
    nullable: false
  })
  getLocationAreaEncounterRates(@TypeGraphQL.Root() root: VersionCount, @TypeGraphQL.Args() args: VersionCountLocationAreaEncounterRatesArgs): number {
    return root.locationAreaEncounterRates;
  }
}
