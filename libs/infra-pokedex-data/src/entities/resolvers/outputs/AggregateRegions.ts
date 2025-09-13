import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsAvgAggregate } from "../outputs/RegionsAvgAggregate";
import { RegionsCountAggregate } from "../outputs/RegionsCountAggregate";
import { RegionsMaxAggregate } from "../outputs/RegionsMaxAggregate";
import { RegionsMinAggregate } from "../outputs/RegionsMinAggregate";
import { RegionsSumAggregate } from "../outputs/RegionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateRegions", {})
export class AggregateRegions {
  @TypeGraphQL.Field(_type => RegionsCountAggregate, {
    nullable: true
  })
  _count!: RegionsCountAggregate | null;

  @TypeGraphQL.Field(_type => RegionsAvgAggregate, {
    nullable: true
  })
  _avg!: RegionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => RegionsSumAggregate, {
    nullable: true
  })
  _sum!: RegionsSumAggregate | null;

  @TypeGraphQL.Field(_type => RegionsMinAggregate, {
    nullable: true
  })
  _min!: RegionsMinAggregate | null;

  @TypeGraphQL.Field(_type => RegionsMaxAggregate, {
    nullable: true
  })
  _max!: RegionsMaxAggregate | null;
}
