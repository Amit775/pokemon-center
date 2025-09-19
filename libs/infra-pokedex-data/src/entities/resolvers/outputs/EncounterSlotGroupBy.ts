import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotAvgAggregate } from "../outputs/EncounterSlotAvgAggregate";
import { EncounterSlotCountAggregate } from "../outputs/EncounterSlotCountAggregate";
import { EncounterSlotMaxAggregate } from "../outputs/EncounterSlotMaxAggregate";
import { EncounterSlotMinAggregate } from "../outputs/EncounterSlotMinAggregate";
import { EncounterSlotSumAggregate } from "../outputs/EncounterSlotSumAggregate";

@TypeGraphQL.ObjectType("EncounterSlotGroupBy", {})
export class EncounterSlotGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  @TypeGraphQL.Field(_type => EncounterSlotCountAggregate, {
    nullable: true
  })
  _count!: EncounterSlotCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterSlotAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotSumAggregate, {
    nullable: true
  })
  _sum!: EncounterSlotSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotMinAggregate, {
    nullable: true
  })
  _min!: EncounterSlotMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotMaxAggregate, {
    nullable: true
  })
  _max!: EncounterSlotMaxAggregate | null;
}
