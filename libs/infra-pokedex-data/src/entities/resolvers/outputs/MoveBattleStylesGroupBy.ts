import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesAvgAggregate } from "../outputs/MoveBattleStylesAvgAggregate";
import { MoveBattleStylesCountAggregate } from "../outputs/MoveBattleStylesCountAggregate";
import { MoveBattleStylesMaxAggregate } from "../outputs/MoveBattleStylesMaxAggregate";
import { MoveBattleStylesMinAggregate } from "../outputs/MoveBattleStylesMinAggregate";
import { MoveBattleStylesSumAggregate } from "../outputs/MoveBattleStylesSumAggregate";

@TypeGraphQL.ObjectType("MoveBattleStylesGroupBy", {})
export class MoveBattleStylesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

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
