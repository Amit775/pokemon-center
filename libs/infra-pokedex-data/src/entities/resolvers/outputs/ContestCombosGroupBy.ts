import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosAvgAggregate } from "../outputs/ContestCombosAvgAggregate";
import { ContestCombosCountAggregate } from "../outputs/ContestCombosCountAggregate";
import { ContestCombosMaxAggregate } from "../outputs/ContestCombosMaxAggregate";
import { ContestCombosMinAggregate } from "../outputs/ContestCombosMinAggregate";
import { ContestCombosSumAggregate } from "../outputs/ContestCombosSumAggregate";

@TypeGraphQL.ObjectType("ContestCombosGroupBy", {})
export class ContestCombosGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_move_id!: number;

  @TypeGraphQL.Field(_type => ContestCombosCountAggregate, {
    nullable: true
  })
  _count!: ContestCombosCountAggregate | null;

  @TypeGraphQL.Field(_type => ContestCombosAvgAggregate, {
    nullable: true
  })
  _avg!: ContestCombosAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContestCombosSumAggregate, {
    nullable: true
  })
  _sum!: ContestCombosSumAggregate | null;

  @TypeGraphQL.Field(_type => ContestCombosMinAggregate, {
    nullable: true
  })
  _min!: ContestCombosMinAggregate | null;

  @TypeGraphQL.Field(_type => ContestCombosMaxAggregate, {
    nullable: true
  })
  _max!: ContestCombosMaxAggregate | null;
}
