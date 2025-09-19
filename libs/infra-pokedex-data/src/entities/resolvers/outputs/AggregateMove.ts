import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveAvgAggregate } from "../outputs/MoveAvgAggregate";
import { MoveCountAggregate } from "../outputs/MoveCountAggregate";
import { MoveMaxAggregate } from "../outputs/MoveMaxAggregate";
import { MoveMinAggregate } from "../outputs/MoveMinAggregate";
import { MoveSumAggregate } from "../outputs/MoveSumAggregate";

@TypeGraphQL.ObjectType("AggregateMove", {})
export class AggregateMove {
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
