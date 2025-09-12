import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesAvgAggregate } from "../outputs/ContestTypesAvgAggregate";
import { ContestTypesCountAggregate } from "../outputs/ContestTypesCountAggregate";
import { ContestTypesMaxAggregate } from "../outputs/ContestTypesMaxAggregate";
import { ContestTypesMinAggregate } from "../outputs/ContestTypesMinAggregate";
import { ContestTypesSumAggregate } from "../outputs/ContestTypesSumAggregate";

@TypeGraphQL.ObjectType("AggregateContestTypes", {})
export class AggregateContestTypes {
  @TypeGraphQL.Field(_type => ContestTypesCountAggregate, {
    nullable: true
  })
  _count!: ContestTypesCountAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypesAvgAggregate, {
    nullable: true
  })
  _avg!: ContestTypesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypesSumAggregate, {
    nullable: true
  })
  _sum!: ContestTypesSumAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypesMinAggregate, {
    nullable: true
  })
  _min!: ContestTypesMinAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypesMaxAggregate, {
    nullable: true
  })
  _max!: ContestTypesMaxAggregate | null;
}
