import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersAvgAggregate } from "../outputs/GendersAvgAggregate";
import { GendersCountAggregate } from "../outputs/GendersCountAggregate";
import { GendersMaxAggregate } from "../outputs/GendersMaxAggregate";
import { GendersMinAggregate } from "../outputs/GendersMinAggregate";
import { GendersSumAggregate } from "../outputs/GendersSumAggregate";

@TypeGraphQL.ObjectType("AggregateGenders", {})
export class AggregateGenders {
  @TypeGraphQL.Field(_type => GendersCountAggregate, {
    nullable: true
  })
  _count!: GendersCountAggregate | null;

  @TypeGraphQL.Field(_type => GendersAvgAggregate, {
    nullable: true
  })
  _avg!: GendersAvgAggregate | null;

  @TypeGraphQL.Field(_type => GendersSumAggregate, {
    nullable: true
  })
  _sum!: GendersSumAggregate | null;

  @TypeGraphQL.Field(_type => GendersMinAggregate, {
    nullable: true
  })
  _min!: GendersMinAggregate | null;

  @TypeGraphQL.Field(_type => GendersMaxAggregate, {
    nullable: true
  })
  _max!: GendersMaxAggregate | null;
}
