import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboAvgAggregate } from "../outputs/SuperContestComboAvgAggregate";
import { SuperContestComboCountAggregate } from "../outputs/SuperContestComboCountAggregate";
import { SuperContestComboMaxAggregate } from "../outputs/SuperContestComboMaxAggregate";
import { SuperContestComboMinAggregate } from "../outputs/SuperContestComboMinAggregate";
import { SuperContestComboSumAggregate } from "../outputs/SuperContestComboSumAggregate";

@TypeGraphQL.ObjectType("AggregateSuperContestCombo", {})
export class AggregateSuperContestCombo {
  @TypeGraphQL.Field(_type => SuperContestComboCountAggregate, {
    nullable: true
  })
  _count!: SuperContestComboCountAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestComboAvgAggregate, {
    nullable: true
  })
  _avg!: SuperContestComboAvgAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestComboSumAggregate, {
    nullable: true
  })
  _sum!: SuperContestComboSumAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestComboMinAggregate, {
    nullable: true
  })
  _min!: SuperContestComboMinAggregate | null;

  @TypeGraphQL.Field(_type => SuperContestComboMaxAggregate, {
    nullable: true
  })
  _max!: SuperContestComboMaxAggregate | null;
}
