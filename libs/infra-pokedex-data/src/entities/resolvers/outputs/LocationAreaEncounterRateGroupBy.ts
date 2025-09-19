import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateAvgAggregate } from "../outputs/LocationAreaEncounterRateAvgAggregate";
import { LocationAreaEncounterRateCountAggregate } from "../outputs/LocationAreaEncounterRateCountAggregate";
import { LocationAreaEncounterRateMaxAggregate } from "../outputs/LocationAreaEncounterRateMaxAggregate";
import { LocationAreaEncounterRateMinAggregate } from "../outputs/LocationAreaEncounterRateMinAggregate";
import { LocationAreaEncounterRateSumAggregate } from "../outputs/LocationAreaEncounterRateSumAggregate";

@TypeGraphQL.ObjectType("LocationAreaEncounterRateGroupBy", {})
export class LocationAreaEncounterRateGroupBy {
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

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCountAggregate, {
    nullable: true
  })
  _count!: LocationAreaEncounterRateCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateAvgAggregate, {
    nullable: true
  })
  _avg!: LocationAreaEncounterRateAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateSumAggregate, {
    nullable: true
  })
  _sum!: LocationAreaEncounterRateSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateMinAggregate, {
    nullable: true
  })
  _min!: LocationAreaEncounterRateMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateMaxAggregate, {
    nullable: true
  })
  _max!: LocationAreaEncounterRateMaxAggregate | null;
}
