import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesAvgAggregate } from "../outputs/MovesAvgAggregate";
import { MovesCountAggregate } from "../outputs/MovesCountAggregate";
import { MovesMaxAggregate } from "../outputs/MovesMaxAggregate";
import { MovesMinAggregate } from "../outputs/MovesMinAggregate";
import { MovesSumAggregate } from "../outputs/MovesSumAggregate";

@TypeGraphQL.ObjectType("MovesGroupBy", {})
export class MovesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  power!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pp!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  accuracy!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  target_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_class_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_chance!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contest_type_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contest_effect_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  super_contest_effect_id!: number | null;

  @TypeGraphQL.Field(_type => MovesCountAggregate, {
    nullable: true
  })
  _count!: MovesCountAggregate | null;

  @TypeGraphQL.Field(_type => MovesAvgAggregate, {
    nullable: true
  })
  _avg!: MovesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovesSumAggregate, {
    nullable: true
  })
  _sum!: MovesSumAggregate | null;

  @TypeGraphQL.Field(_type => MovesMinAggregate, {
    nullable: true
  })
  _min!: MovesMinAggregate | null;

  @TypeGraphQL.Field(_type => MovesMaxAggregate, {
    nullable: true
  })
  _max!: MovesMaxAggregate | null;
}
