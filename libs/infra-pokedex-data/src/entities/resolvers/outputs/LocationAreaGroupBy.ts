import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaAvgAggregate } from "../outputs/LocationAreaAvgAggregate";
import { LocationAreaCountAggregate } from "../outputs/LocationAreaCountAggregate";
import { LocationAreaMaxAggregate } from "../outputs/LocationAreaMaxAggregate";
import { LocationAreaMinAggregate } from "../outputs/LocationAreaMinAggregate";
import { LocationAreaSumAggregate } from "../outputs/LocationAreaSumAggregate";

@TypeGraphQL.ObjectType("LocationAreaGroupBy", {})
export class LocationAreaGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier!: string | null;

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
