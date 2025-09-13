import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasCountEncounterRatesArgs } from "./args/LocationAreasCountEncounterRatesArgs";
import { LocationAreasCountEncountersArgs } from "./args/LocationAreasCountEncountersArgs";

@TypeGraphQL.ObjectType("LocationAreasCount", {})
export class LocationAreasCount {
  encounters!: number;
  encounterRates!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounters",
    nullable: false
  })
  getEncounters(@TypeGraphQL.Root() root: LocationAreasCount, @TypeGraphQL.Args() args: LocationAreasCountEncountersArgs): number {
    return root.encounters;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "encounterRates",
    nullable: false
  })
  getEncounterRates(@TypeGraphQL.Root() root: LocationAreasCount, @TypeGraphQL.Args() args: LocationAreasCountEncounterRatesArgs): number {
    return root.encounterRates;
  }
}
