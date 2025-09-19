import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupAvgAggregate } from "../outputs/EggGroupAvgAggregate";
import { EggGroupCountAggregate } from "../outputs/EggGroupCountAggregate";
import { EggGroupMaxAggregate } from "../outputs/EggGroupMaxAggregate";
import { EggGroupMinAggregate } from "../outputs/EggGroupMinAggregate";
import { EggGroupSumAggregate } from "../outputs/EggGroupSumAggregate";

@TypeGraphQL.ObjectType("EggGroupGroupBy", {})
export class EggGroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => EggGroupCountAggregate, {
    nullable: true
  })
  _count!: EggGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupAvgAggregate, {
    nullable: true
  })
  _avg!: EggGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupSumAggregate, {
    nullable: true
  })
  _sum!: EggGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupMinAggregate, {
    nullable: true
  })
  _min!: EggGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => EggGroupMaxAggregate, {
    nullable: true
  })
  _max!: EggGroupMaxAggregate | null;
}
