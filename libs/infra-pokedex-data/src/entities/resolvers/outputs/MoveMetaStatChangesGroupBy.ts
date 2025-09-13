import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesAvgAggregate } from "../outputs/MoveMetaStatChangesAvgAggregate";
import { MoveMetaStatChangesCountAggregate } from "../outputs/MoveMetaStatChangesCountAggregate";
import { MoveMetaStatChangesMaxAggregate } from "../outputs/MoveMetaStatChangesMaxAggregate";
import { MoveMetaStatChangesMinAggregate } from "../outputs/MoveMetaStatChangesMinAggregate";
import { MoveMetaStatChangesSumAggregate } from "../outputs/MoveMetaStatChangesSumAggregate";

@TypeGraphQL.ObjectType("MoveMetaStatChangesGroupBy", {})
export class MoveMetaStatChangesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCountAggregate, {
    nullable: true
  })
  _count!: MoveMetaStatChangesCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesAvgAggregate, {
    nullable: true
  })
  _avg!: MoveMetaStatChangesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesSumAggregate, {
    nullable: true
  })
  _sum!: MoveMetaStatChangesSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesMinAggregate, {
    nullable: true
  })
  _min!: MoveMetaStatChangesMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesMaxAggregate, {
    nullable: true
  })
  _max!: MoveMetaStatChangesMaxAggregate | null;
}
