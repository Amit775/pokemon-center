import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesAvgAggregate } from "../outputs/MachinesAvgAggregate";
import { MachinesCountAggregate } from "../outputs/MachinesCountAggregate";
import { MachinesMaxAggregate } from "../outputs/MachinesMaxAggregate";
import { MachinesMinAggregate } from "../outputs/MachinesMinAggregate";
import { MachinesSumAggregate } from "../outputs/MachinesSumAggregate";

@TypeGraphQL.ObjectType("MachinesGroupBy", {})
export class MachinesGroupBy {
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

  @TypeGraphQL.Field(_type => MachinesCountAggregate, {
    nullable: true
  })
  _count!: MachinesCountAggregate | null;

  @TypeGraphQL.Field(_type => MachinesAvgAggregate, {
    nullable: true
  })
  _avg!: MachinesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MachinesSumAggregate, {
    nullable: true
  })
  _sum!: MachinesSumAggregate | null;

  @TypeGraphQL.Field(_type => MachinesMinAggregate, {
    nullable: true
  })
  _min!: MachinesMinAggregate | null;

  @TypeGraphQL.Field(_type => MachinesMaxAggregate, {
    nullable: true
  })
  _max!: MachinesMaxAggregate | null;
}
