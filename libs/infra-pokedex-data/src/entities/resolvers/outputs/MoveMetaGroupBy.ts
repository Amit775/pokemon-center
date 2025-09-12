import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAvgAggregate } from "../outputs/MoveMetaAvgAggregate";
import { MoveMetaCountAggregate } from "../outputs/MoveMetaCountAggregate";
import { MoveMetaMaxAggregate } from "../outputs/MoveMetaMaxAggregate";
import { MoveMetaMinAggregate } from "../outputs/MoveMetaMinAggregate";
import { MoveMetaSumAggregate } from "../outputs/MoveMetaSumAggregate";

@TypeGraphQL.ObjectType("MoveMetaGroupBy", {})
export class MoveMetaGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  meta_category_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  meta_ailment_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_hits!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_hits!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_turns!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_turns!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  drain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  healing!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  crit_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ailment_chance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flinch_chance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_chance!: number;

  @TypeGraphQL.Field(_type => MoveMetaCountAggregate, {
    nullable: true
  })
  _count!: MoveMetaCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAvgAggregate, {
    nullable: true
  })
  _avg!: MoveMetaAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaSumAggregate, {
    nullable: true
  })
  _sum!: MoveMetaSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaMinAggregate, {
    nullable: true
  })
  _min!: MoveMetaMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaMaxAggregate, {
    nullable: true
  })
  _max!: MoveMetaMaxAggregate | null;
}
