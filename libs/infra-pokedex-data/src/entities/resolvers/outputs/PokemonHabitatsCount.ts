import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsCountSpeciesArgs } from "./args/PokemonHabitatsCountSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonHabitatsCount", {})
export class PokemonHabitatsCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: PokemonHabitatsCount, @TypeGraphQL.Args() args: PokemonHabitatsCountSpeciesArgs): number {
    return root.species;
  }
}
