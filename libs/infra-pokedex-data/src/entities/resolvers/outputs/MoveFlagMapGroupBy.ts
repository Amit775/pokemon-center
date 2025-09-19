import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapAvgAggregate } from "../outputs/MoveFlagMapAvgAggregate";
import { MoveFlagMapCountAggregate } from "../outputs/MoveFlagMapCountAggregate";
import { MoveFlagMapMaxAggregate } from "../outputs/MoveFlagMapMaxAggregate";
import { MoveFlagMapMinAggregate } from "../outputs/MoveFlagMapMinAggregate";
import { MoveFlagMapSumAggregate } from "../outputs/MoveFlagMapSumAggregate";

@TypeGraphQL.ObjectType("MoveFlagMapGroupBy", {})
export class MoveFlagMapGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_flag_id!: number;

  @TypeGraphQL.Field(_type => MoveFlagMapCountAggregate, {
    nullable: true
  })
  _count!: MoveFlagMapCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagMapAvgAggregate, {
    nullable: true
  })
  _avg!: MoveFlagMapAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagMapSumAggregate, {
    nullable: true
  })
  _sum!: MoveFlagMapSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagMapMinAggregate, {
    nullable: true
  })
  _min!: MoveFlagMapMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagMapMaxAggregate, {
    nullable: true
  })
  _max!: MoveFlagMapMaxAggregate | null;
}
