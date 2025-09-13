import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesCountPokemonAbilitiesArgs } from "./args/AbilitiesCountPokemonAbilitiesArgs";

@TypeGraphQL.ObjectType("AbilitiesCount", {})
export class AbilitiesCount {
  pokemonAbilities!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonAbilities",
    nullable: false
  })
  getPokemonAbilities(@TypeGraphQL.Root() root: AbilitiesCount, @TypeGraphQL.Args() args: AbilitiesCountPokemonAbilitiesArgs): number {
    return root.pokemonAbilities;
  }
}
