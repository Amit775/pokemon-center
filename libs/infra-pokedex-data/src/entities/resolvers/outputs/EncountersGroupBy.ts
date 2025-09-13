import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersAvgAggregate } from "../outputs/EncountersAvgAggregate";
import { EncountersCountAggregate } from "../outputs/EncountersCountAggregate";
import { EncountersMaxAggregate } from "../outputs/EncountersMaxAggregate";
import { EncountersMinAggregate } from "../outputs/EncountersMinAggregate";
import { EncountersSumAggregate } from "../outputs/EncountersSumAggregate";

@TypeGraphQL.ObjectType("EncountersGroupBy", {})
export class EncountersGroupBy {
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

  @TypeGraphQL.Field(_type => EncountersCountAggregate, {
    nullable: true
  })
  _count!: EncountersCountAggregate | null;

  @TypeGraphQL.Field(_type => EncountersAvgAggregate, {
    nullable: true
  })
  _avg!: EncountersAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncountersSumAggregate, {
    nullable: true
  })
  _sum!: EncountersSumAggregate | null;

  @TypeGraphQL.Field(_type => EncountersMinAggregate, {
    nullable: true
  })
  _min!: EncountersMinAggregate | null;

  @TypeGraphQL.Field(_type => EncountersMaxAggregate, {
    nullable: true
  })
  _max!: EncountersMaxAggregate | null;
}
