import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesCountSpeciesArgs } from "./args/PokemonShapesCountSpeciesArgs";

@TypeGraphQL.ObjectType("PokemonShapesCount", {})
export class PokemonShapesCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: PokemonShapesCount, @TypeGraphQL.Args() args: PokemonShapesCountSpeciesArgs): number {
    return root.species;
  }
}
