import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesAvgAggregate } from "../outputs/LocationGameIndicesAvgAggregate";
import { LocationGameIndicesCountAggregate } from "../outputs/LocationGameIndicesCountAggregate";
import { LocationGameIndicesMaxAggregate } from "../outputs/LocationGameIndicesMaxAggregate";
import { LocationGameIndicesMinAggregate } from "../outputs/LocationGameIndicesMinAggregate";
import { LocationGameIndicesSumAggregate } from "../outputs/LocationGameIndicesSumAggregate";

@TypeGraphQL.ObjectType("LocationGameIndicesGroupBy", {})
export class LocationGameIndicesGroupBy {
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

  @TypeGraphQL.Field(_type => LocationGameIndicesCountAggregate, {
    nullable: true
  })
  _count!: LocationGameIndicesCountAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndicesAvgAggregate, {
    nullable: true
  })
  _avg!: LocationGameIndicesAvgAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndicesSumAggregate, {
    nullable: true
  })
  _sum!: LocationGameIndicesSumAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndicesMinAggregate, {
    nullable: true
  })
  _min!: LocationGameIndicesMinAggregate | null;

  @TypeGraphQL.Field(_type => LocationGameIndicesMaxAggregate, {
    nullable: true
  })
  _max!: LocationGameIndicesMaxAggregate | null;
}
