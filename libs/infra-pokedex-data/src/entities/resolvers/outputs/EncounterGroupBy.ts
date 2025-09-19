import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterAvgAggregate } from "../outputs/EncounterAvgAggregate";
import { EncounterCountAggregate } from "../outputs/EncounterCountAggregate";
import { EncounterMaxAggregate } from "../outputs/EncounterMaxAggregate";
import { EncounterMinAggregate } from "../outputs/EncounterMinAggregate";
import { EncounterSumAggregate } from "../outputs/EncounterSumAggregate";

@TypeGraphQL.ObjectType("EncounterGroupBy", {})
export class EncounterGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_area_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_slot_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  min_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_level!: number;

  @TypeGraphQL.Field(_type => EncounterCountAggregate, {
    nullable: true
  })
  _count!: EncounterCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSumAggregate, {
    nullable: true
  })
  _sum!: EncounterSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMinAggregate, {
    nullable: true
  })
  _min!: EncounterMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMaxAggregate, {
    nullable: true
  })
  _max!: EncounterMaxAggregate | null;
}
