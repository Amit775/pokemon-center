import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCountSpeciesArgs } from "./args/EvolutionChainsCountSpeciesArgs";

@TypeGraphQL.ObjectType("EvolutionChainsCount", {})
export class EvolutionChainsCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: EvolutionChainsCount, @TypeGraphQL.Args() args: EvolutionChainsCountSpeciesArgs): number {
    return root.species;
  }
}
