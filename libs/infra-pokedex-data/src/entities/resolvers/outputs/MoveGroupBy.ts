import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveAvgAggregate } from "../outputs/MoveAvgAggregate";
import { MoveCountAggregate } from "../outputs/MoveCountAggregate";
import { MoveMaxAggregate } from "../outputs/MoveMaxAggregate";
import { MoveMinAggregate } from "../outputs/MoveMinAggregate";
import { MoveSumAggregate } from "../outputs/MoveSumAggregate";

@TypeGraphQL.ObjectType("MoveGroupBy", {})
export class MoveGroupBy {
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

  @TypeGraphQL.Field(_type => MoveCountAggregate, {
    nullable: true
  })
  _count!: MoveCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveAvgAggregate, {
    nullable: true
  })
  _avg!: MoveAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveSumAggregate, {
    nullable: true
  })
  _sum!: MoveSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMinAggregate, {
    nullable: true
  })
  _min!: MoveMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMaxAggregate, {
    nullable: true
  })
  _max!: MoveMaxAggregate | null;
}
