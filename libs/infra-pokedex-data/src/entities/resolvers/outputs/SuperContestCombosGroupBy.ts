import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosAvgAggregate } from "../outputs/SuperContestCombosAvgAggregate";
import { SuperContestCombosCountAggregate } from "../outputs/SuperContestCombosCountAggregate";
import { SuperContestCombosMaxAggregate } from "../outputs/SuperContestCombosMaxAggregate";
import { SuperContestCombosMinAggregate } from "../outputs/SuperContestCombosMinAggregate";
import { SuperContestCombosSumAggregate } from "../outputs/SuperContestCombosSumAggregate";

@TypeGraphQL.ObjectType("SuperContestCombosGroupBy", {})
export class SuperContestCombosGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_move_id!: number;

  @TypeGraphQL.Field(_type => SuperContestCombosCountAggregate, {
    nullable: true
  })
  _count!: SuperContestCombosCountAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestCombosAvgAggregate, {
    nullable: true
  })
  _avg!: SuperContestCombosAvgAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestCombosSumAggregate, {
    nullable: true
  })
  _sum!: SuperContestCombosSumAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestCombosMinAggregate, {
    nullable: true
  })
  _min!: SuperContestCombosMinAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestCombosMaxAggregate, {
    nullable: true
  })
  _max!: SuperContestCombosMaxAggregate | null;
}
