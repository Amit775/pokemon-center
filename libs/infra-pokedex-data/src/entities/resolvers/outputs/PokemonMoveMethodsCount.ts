import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCountPokemonMovesArgs } from "./args/PokemonMoveMethodsCountPokemonMovesArgs";
import { PokemonMoveMethodsCountVersionGroupsArgs } from "./args/PokemonMoveMethodsCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("PokemonMoveMethodsCount", {})
export class PokemonMoveMethodsCount {
  pokemonMoves!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonMoves",
    nullable: false
  })
  getPokemonMoves(@TypeGraphQL.Root() root: PokemonMoveMethodsCount, @TypeGraphQL.Args() args: PokemonMoveMethodsCountPokemonMovesArgs): number {
    return root.pokemonMoves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: PokemonMoveMethodsCount, @TypeGraphQL.Args() args: PokemonMoveMethodsCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
