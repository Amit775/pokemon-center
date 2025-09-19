import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCountEncounterRatesArgs } from "./args/LocationAreaCountEncounterRatesArgs";
import { LocationAreaCountEncountersArgs } from "./args/LocationAreaCountEncountersArgs";

@TypeGraphQL.ObjectType("LocationAreaCount", {})
export class LocationAreaCount {
  encounters!: number;
  encounterRates!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: LocationAreaCount, @TypeGraphQL.Args() args: LocationAreaCountEncountersArgs): number {
    return root.encounters;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounterRates",
    nullable: false
  })
  getEncounterRates(@TypeGraphQL.Root() root: LocationAreaCount, @TypeGraphQL.Args() args: LocationAreaCountEncounterRatesArgs): number {
    return root.encounterRates;
  }
}
