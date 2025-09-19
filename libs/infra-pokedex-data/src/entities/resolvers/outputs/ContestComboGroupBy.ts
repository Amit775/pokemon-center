import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboAvgAggregate } from "../outputs/ContestComboAvgAggregate";
import { ContestComboCountAggregate } from "../outputs/ContestComboCountAggregate";
import { ContestComboMaxAggregate } from "../outputs/ContestComboMaxAggregate";
import { ContestComboMinAggregate } from "../outputs/ContestComboMinAggregate";
import { ContestComboSumAggregate } from "../outputs/ContestComboSumAggregate";

@TypeGraphQL.ObjectType("ContestComboGroupBy", {})
export class ContestComboGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_move_id!: number;

  @TypeGraphQL.Field(_type => ContestComboCountAggregate, {
    nullable: true
  })
  _count!: ContestComboCountAggregate | null;

  @TypeGraphQL.Field(_type => ContestComboAvgAggregate, {
    nullable: true
  })
  _avg!: ContestComboAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContestComboSumAggregate, {
    nullable: true
  })
  _sum!: ContestComboSumAggregate | null;

  @TypeGraphQL.Field(_type => ContestComboMinAggregate, {
    nullable: true
  })
  _min!: ContestComboMinAggregate | null;

  @TypeGraphQL.Field(_type => ContestComboMaxAggregate, {
    nullable: true
  })
  _max!: ContestComboMaxAggregate | null;
}
