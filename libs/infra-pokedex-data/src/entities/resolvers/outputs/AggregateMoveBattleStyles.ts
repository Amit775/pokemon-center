import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesAvgAggregate } from "../outputs/MoveBattleStylesAvgAggregate";
import { MoveBattleStylesCountAggregate } from "../outputs/MoveBattleStylesCountAggregate";
import { MoveBattleStylesMaxAggregate } from "../outputs/MoveBattleStylesMaxAggregate";
import { MoveBattleStylesMinAggregate } from "../outputs/MoveBattleStylesMinAggregate";
import { MoveBattleStylesSumAggregate } from "../outputs/MoveBattleStylesSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveBattleStyles", {})
export class AggregateMoveBattleStyles {
  @TypeGraphQL.Field(_type => MoveBattleStylesCountAggregate, {
    nullable: true
  })
  _count!: MoveBattleStylesCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStylesAvgAggregate, {
    nullable: true
  })
  _avg!: MoveBattleStylesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStylesSumAggregate, {
    nullable: true
  })
  _sum!: MoveBattleStylesSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStylesMinAggregate, {
    nullable: true
  })
  _min!: MoveBattleStylesMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveBattleStylesMaxAggregate, {
    nullable: true
  })
  _max!: MoveBattleStylesMaxAggregate | null;
}
