import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsAvgAggregate } from "../outputs/LocationsAvgAggregate";
import { LocationsCountAggregate } from "../outputs/LocationsCountAggregate";
import { LocationsMaxAggregate } from "../outputs/LocationsMaxAggregate";
import { LocationsMinAggregate } from "../outputs/LocationsMinAggregate";
import { LocationsSumAggregate } from "../outputs/LocationsSumAggregate";

@TypeGraphQL.ObjectType("LocationsGroupBy", {})
export class LocationsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  region_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => LocationsCountAggregate, {
    nullable: true
  })
  _count!: LocationsCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationsAvgAggregate, {
    nullable: true
  })
  _avg!: LocationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationsSumAggregate, {
    nullable: true
  })
  _sum!: LocationsSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationsMinAggregate, {
    nullable: true
  })
  _min!: LocationsMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationsMaxAggregate, {
    nullable: true
  })
  _max!: LocationsMaxAggregate | null;
}
