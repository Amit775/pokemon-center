import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasAvgAggregate } from "../outputs/LocationAreasAvgAggregate";
import { LocationAreasCountAggregate } from "../outputs/LocationAreasCountAggregate";
import { LocationAreasMaxAggregate } from "../outputs/LocationAreasMaxAggregate";
import { LocationAreasMinAggregate } from "../outputs/LocationAreasMinAggregate";
import { LocationAreasSumAggregate } from "../outputs/LocationAreasSumAggregate";

@TypeGraphQL.ObjectType("LocationAreasGroupBy", {})
export class LocationAreasGroupBy {
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
