import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsAvgAggregate } from "../outputs/EncounterSlotsAvgAggregate";
import { EncounterSlotsCountAggregate } from "../outputs/EncounterSlotsCountAggregate";
import { EncounterSlotsMaxAggregate } from "../outputs/EncounterSlotsMaxAggregate";
import { EncounterSlotsMinAggregate } from "../outputs/EncounterSlotsMinAggregate";
import { EncounterSlotsSumAggregate } from "../outputs/EncounterSlotsSumAggregate";

@TypeGraphQL.ObjectType("EncounterSlotsGroupBy", {})
export class EncounterSlotsGroupBy {
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

  @TypeGraphQL.Field(_type => EncounterSlotsCountAggregate, {
    nullable: true
  })
  _count!: EncounterSlotsCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotsAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterSlotsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotsSumAggregate, {
    nullable: true
  })
  _sum!: EncounterSlotsSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotsMinAggregate, {
    nullable: true
  })
  _min!: EncounterSlotsMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterSlotsMaxAggregate, {
    nullable: true
  })
  _max!: EncounterSlotsMaxAggregate | null;
}
