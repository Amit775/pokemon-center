import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeCountSpeciesArgs } from "./args/PokemonShapeCountSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonShapeCount", {})
export class PokemonShapeCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: PokemonShapeCount, @TypeGraphQL.Args() args: PokemonShapeCountSpeciesArgs): number {
    return root.species;
  }
}
