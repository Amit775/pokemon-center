import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesAvgAggregate } from "../outputs/MovesAvgAggregate";
import { MovesCountAggregate } from "../outputs/MovesCountAggregate";
import { MovesMaxAggregate } from "../outputs/MovesMaxAggregate";
import { MovesMinAggregate } from "../outputs/MovesMinAggregate";
import { MovesSumAggregate } from "../outputs/MovesSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoves", {})
export class AggregateMoves {
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
