import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesCountExperienceArgs } from "./args/GrowthRatesCountExperienceArgs";
import { GrowthRatesCountSpeciesArgs } from "./args/GrowthRatesCountSpeciesArgs";

@TypeGraphQL.ObjectType("GrowthRatesCount", {})
export class GrowthRatesCount {
  species!: number;
  experience!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "species",
    nullable: false
  })
  getSpecies(@TypeGraphQL.Root() root: GrowthRatesCount, @TypeGraphQL.Args() args: GrowthRatesCountSpeciesArgs): number {
    return root.species;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "experience",
    nullable: false
  })
  getExperience(@TypeGraphQL.Root() root: GrowthRatesCount, @TypeGraphQL.Args() args: GrowthRatesCountExperienceArgs): number {
    return root.experience;
  }
}
