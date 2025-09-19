import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupCountSpeciesArgs } from "./args/EggGroupCountSpeciesArgs";

@TypeGraphQL.ObjectType("EggGroupCount", {})
export class EggGroupCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: EggGroupCount, @TypeGraphQL.Args() args: EggGroupCountSpeciesArgs): number {
    return root.species;
  }
}
