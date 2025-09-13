import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsCountSpeciesArgs } from "./args/EggGroupsCountSpeciesArgs";

@TypeGraphQL.ObjectType("EggGroupsCount", {})
export class EggGroupsCount {
  species!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: EggGroupsCount, @TypeGraphQL.Args() args: EggGroupsCountSpeciesArgs): number {
    return root.species;
  }
}
