import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeAvgAggregate } from "../outputs/ContestTypeAvgAggregate";
import { ContestTypeCountAggregate } from "../outputs/ContestTypeCountAggregate";
import { ContestTypeMaxAggregate } from "../outputs/ContestTypeMaxAggregate";
import { ContestTypeMinAggregate } from "../outputs/ContestTypeMinAggregate";
import { ContestTypeSumAggregate } from "../outputs/ContestTypeSumAggregate";

@TypeGraphQL.ObjectType("ContestTypeGroupBy", {})
export class ContestTypeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => ContestTypeCountAggregate, {
    nullable: true
  })
  _count!: ContestTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypeAvgAggregate, {
    nullable: true
  })
  _avg!: ContestTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypeSumAggregate, {
    nullable: true
  })
  _sum!: ContestTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypeMinAggregate, {
    nullable: true
  })
  _min!: ContestTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => ContestTypeMaxAggregate, {
    nullable: true
  })
  _max!: ContestTypeMaxAggregate | null;
}
