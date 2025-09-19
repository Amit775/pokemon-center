import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexAvgAggregate } from "../outputs/LocationGameIndexAvgAggregate";
import { LocationGameIndexCountAggregate } from "../outputs/LocationGameIndexCountAggregate";
import { LocationGameIndexMaxAggregate } from "../outputs/LocationGameIndexMaxAggregate";
import { LocationGameIndexMinAggregate } from "../outputs/LocationGameIndexMinAggregate";
import { LocationGameIndexSumAggregate } from "../outputs/LocationGameIndexSumAggregate";

@TypeGraphQL.ObjectType("LocationGameIndexGroupBy", {})
export class LocationGameIndexGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => LocationGameIndexCountAggregate, {
    nullable: true
  })
  _count!: LocationGameIndexCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndexAvgAggregate, {
    nullable: true
  })
  _avg!: LocationGameIndexAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndexSumAggregate, {
    nullable: true
  })
  _sum!: LocationGameIndexSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndexMinAggregate, {
    nullable: true
  })
  _min!: LocationGameIndexMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndexMaxAggregate, {
    nullable: true
  })
  _max!: LocationGameIndexMaxAggregate | null;
}
