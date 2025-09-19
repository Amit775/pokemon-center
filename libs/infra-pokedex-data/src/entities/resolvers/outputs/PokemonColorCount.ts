import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorCountSpeciesArgs } from "./args/PokemonColorCountSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonColorCount", {})
export class PokemonColorCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: PokemonColorCount, @TypeGraphQL.Args() args: PokemonColorCountSpeciesArgs): number {
    return root.species;
  }
}
