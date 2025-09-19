import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityCountPokemonAbilitiesArgs } from "./args/AbilityCountPokemonAbilitiesArgs";

@TypeGraphQL.ObjectType("AbilityCount", {})
export class AbilityCount {
  pokemonAbilities!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonAbilities",
    nullable: false
  })
  getPokemonAbilities(@TypeGraphQL.Root() root: AbilityCount, @TypeGraphQL.Args() args: AbilityCountPokemonAbilitiesArgs): number {
    return root.pokemonAbilities;
  }
}
