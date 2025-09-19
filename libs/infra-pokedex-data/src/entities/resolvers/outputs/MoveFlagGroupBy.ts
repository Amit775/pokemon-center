import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagAvgAggregate } from "../outputs/MoveFlagAvgAggregate";
import { MoveFlagCountAggregate } from "../outputs/MoveFlagCountAggregate";
import { MoveFlagMaxAggregate } from "../outputs/MoveFlagMaxAggregate";
import { MoveFlagMinAggregate } from "../outputs/MoveFlagMinAggregate";
import { MoveFlagSumAggregate } from "../outputs/MoveFlagSumAggregate";

@TypeGraphQL.ObjectType("MoveFlagGroupBy", {})
export class MoveFlagGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveFlagCountAggregate, {
    nullable: true
  })
  _count!: MoveFlagCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagAvgAggregate, {
    nullable: true
  })
  _avg!: MoveFlagAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagSumAggregate, {
    nullable: true
  })
  _sum!: MoveFlagSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagMinAggregate, {
    nullable: true
  })
  _min!: MoveFlagMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagMaxAggregate, {
    nullable: true
  })
  _max!: MoveFlagMaxAggregate | null;
}
