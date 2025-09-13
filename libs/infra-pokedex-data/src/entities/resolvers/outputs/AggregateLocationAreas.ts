import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasAvgAggregate } from "../outputs/LocationAreasAvgAggregate";
import { LocationAreasCountAggregate } from "../outputs/LocationAreasCountAggregate";
import { LocationAreasMaxAggregate } from "../outputs/LocationAreasMaxAggregate";
import { LocationAreasMinAggregate } from "../outputs/LocationAreasMinAggregate";
import { LocationAreasSumAggregate } from "../outputs/LocationAreasSumAggregate";

@TypeGraphQL.ObjectType("AggregateLocationAreas", {})
export class AggregateLocationAreas {
  @TypeGraphQL.Field(_type => LocationAreasCountAggregate, {
    nullable: true
  })
  _count!: LocationAreasCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreasAvgAggregate, {
    nullable: true
  })
  _avg!: LocationAreasAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreasSumAggregate, {
    nullable: true
  })
  _sum!: LocationAreasSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreasMinAggregate, {
    nullable: true
  })
  _min!: LocationAreasMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationAreasMaxAggregate, {
    nullable: true
  })
  _max!: LocationAreasMaxAggregate | null;
}
