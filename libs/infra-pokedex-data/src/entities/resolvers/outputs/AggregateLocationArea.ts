import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaAvgAggregate } from "../outputs/LocationAreaAvgAggregate";
import { LocationAreaCountAggregate } from "../outputs/LocationAreaCountAggregate";
import { LocationAreaMaxAggregate } from "../outputs/LocationAreaMaxAggregate";
import { LocationAreaMinAggregate } from "../outputs/LocationAreaMinAggregate";
import { LocationAreaSumAggregate } from "../outputs/LocationAreaSumAggregate";

@TypeGraphQL.ObjectType("AggregateLocationArea", {})
export class AggregateLocationArea {
  @TypeGraphQL.Field(_type => LocationAreaCountAggregate, {
    nullable: true
  })
  _count!: LocationAreaCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaAvgAggregate, {
    nullable: true
  })
  _avg!: LocationAreaAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaSumAggregate, {
    nullable: true
  })
  _sum!: LocationAreaSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaMinAggregate, {
    nullable: true
  })
  _min!: LocationAreaMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreaMaxAggregate, {
    nullable: true
  })
  _max!: LocationAreaMaxAggregate | null;
}
