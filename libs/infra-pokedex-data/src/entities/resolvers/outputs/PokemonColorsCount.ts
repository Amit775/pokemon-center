import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsCountSpeciesArgs } from "./args/PokemonColorsCountSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonColorsCount", {})
export class PokemonColorsCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: PokemonColorsCount, @TypeGraphQL.Args() args: PokemonColorsCountSpeciesArgs): number {
    return root.species;
  }
}
