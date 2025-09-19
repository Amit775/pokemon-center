import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineAvgAggregate } from "../outputs/MachineAvgAggregate";
import { MachineCountAggregate } from "../outputs/MachineCountAggregate";
import { MachineMaxAggregate } from "../outputs/MachineMaxAggregate";
import { MachineMinAggregate } from "../outputs/MachineMinAggregate";
import { MachineSumAggregate } from "../outputs/MachineSumAggregate";

@TypeGraphQL.ObjectType("MachineGroupBy", {})
export class MachineGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  machine_number!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => MachineCountAggregate, {
    nullable: true
  })
  _count!: MachineCountAggregate | null;

  @TypeGraphQL.Field(_type => MachineAvgAggregate, {
    nullable: true
  })
  _avg!: MachineAvgAggregate | null;

  @TypeGraphQL.Field(_type => MachineSumAggregate, {
    nullable: true
  })
  _sum!: MachineSumAggregate | null;

  @TypeGraphQL.Field(_type => MachineMinAggregate, {
    nullable: true
  })
  _min!: MachineMinAggregate | null;

  @TypeGraphQL.Field(_type => MachineMaxAggregate, {
    nullable: true
  })
  _max!: MachineMaxAggregate | null;
}
