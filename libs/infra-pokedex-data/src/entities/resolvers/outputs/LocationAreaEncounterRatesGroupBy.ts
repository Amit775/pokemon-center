import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesAvgAggregate } from "../outputs/LocationAreaEncounterRatesAvgAggregate";
import { LocationAreaEncounterRatesCountAggregate } from "../outputs/LocationAreaEncounterRatesCountAggregate";
import { LocationAreaEncounterRatesMaxAggregate } from "../outputs/LocationAreaEncounterRatesMaxAggregate";
import { LocationAreaEncounterRatesMinAggregate } from "../outputs/LocationAreaEncounterRatesMinAggregate";
import { LocationAreaEncounterRatesSumAggregate } from "../outputs/LocationAreaEncounterRatesSumAggregate";

@TypeGraphQL.ObjectType("LocationAreaEncounterRatesGroupBy", {})
export class LocationAreaEncounterRatesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_area_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rate!: number;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCountAggregate, {
    nullable: true
  })
  _count!: LocationAreaEncounterRatesCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesAvgAggregate, {
    nullable: true
  })
  _avg!: LocationAreaEncounterRatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesSumAggregate, {
    nullable: true
  })
  _sum!: LocationAreaEncounterRatesSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesMinAggregate, {
    nullable: true
  })
  _min!: LocationAreaEncounterRatesMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesMaxAggregate, {
    nullable: true
  })
  _max!: LocationAreaEncounterRatesMaxAggregate | null;
}
