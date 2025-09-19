import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCountSpeciesArgs } from "./args/EvolutionChainCountSpeciesArgs";

@TypeGraphQL.ObjectType("EvolutionChainCount", {})
export class EvolutionChainCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: EvolutionChainCount, @TypeGraphQL.Args() args: EvolutionChainCountSpeciesArgs): number {
    return root.species;
  }
}
