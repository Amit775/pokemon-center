import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCountPokemonMovesArgs } from "./args/PokemonMoveMethodCountPokemonMovesArgs";
import { PokemonMoveMethodCountVersionGroupsArgs } from "./args/PokemonMoveMethodCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("PokemonMoveMethodCount", {})
export class PokemonMoveMethodCount {
  pokemonMoves!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonMoves",
    nullable: false
  })
  getPokemonMoves(@TypeGraphQL.Root() root: PokemonMoveMethodCount, @TypeGraphQL.Args() args: PokemonMoveMethodCountPokemonMovesArgs): number {
    return root.pokemonMoves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: PokemonMoveMethodCount, @TypeGraphQL.Args() args: PokemonMoveMethodCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
