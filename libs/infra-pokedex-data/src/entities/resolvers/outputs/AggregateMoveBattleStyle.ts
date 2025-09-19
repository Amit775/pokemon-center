import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleAvgAggregate } from "../outputs/MoveBattleStyleAvgAggregate";
import { MoveBattleStyleCountAggregate } from "../outputs/MoveBattleStyleCountAggregate";
import { MoveBattleStyleMaxAggregate } from "../outputs/MoveBattleStyleMaxAggregate";
import { MoveBattleStyleMinAggregate } from "../outputs/MoveBattleStyleMinAggregate";
import { MoveBattleStyleSumAggregate } from "../outputs/MoveBattleStyleSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveBattleStyle", {})
export class AggregateMoveBattleStyle {
  @TypeGraphQL.Field(_type => MoveBattleStyleCountAggregate, {
    nullable: true
  })
  _count!: MoveBattleStyleCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStyleAvgAggregate, {
    nullable: true
  })
  _avg!: MoveBattleStyleAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStyleSumAggregate, {
    nullable: true
  })
  _sum!: MoveBattleStyleSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStyleMinAggregate, {
    nullable: true
  })
  _min!: MoveBattleStyleMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStyleMaxAggregate, {
    nullable: true
  })
  _max!: MoveBattleStyleMaxAggregate | null;
}
