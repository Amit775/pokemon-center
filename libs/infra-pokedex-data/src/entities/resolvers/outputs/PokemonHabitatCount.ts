import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatCountSpeciesArgs } from "./args/PokemonHabitatCountSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonHabitatCount", {})
export class PokemonHabitatCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: PokemonHabitatCount, @TypeGraphQL.Args() args: PokemonHabitatCountSpeciesArgs): number {
    return root.species;
  }
}
