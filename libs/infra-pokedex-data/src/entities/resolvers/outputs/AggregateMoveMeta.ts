import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAvgAggregate } from "../outputs/MoveMetaAvgAggregate";
import { MoveMetaCountAggregate } from "../outputs/MoveMetaCountAggregate";
import { MoveMetaMaxAggregate } from "../outputs/MoveMetaMaxAggregate";
import { MoveMetaMinAggregate } from "../outputs/MoveMetaMinAggregate";
import { MoveMetaSumAggregate } from "../outputs/MoveMetaSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveMeta", {})
export class AggregateMoveMeta {
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
