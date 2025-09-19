import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderAvgAggregate } from "../outputs/GenderAvgAggregate";
import { GenderCountAggregate } from "../outputs/GenderCountAggregate";
import { GenderMaxAggregate } from "../outputs/GenderMaxAggregate";
import { GenderMinAggregate } from "../outputs/GenderMinAggregate";
import { GenderSumAggregate } from "../outputs/GenderSumAggregate";

@TypeGraphQL.ObjectType("AggregateGender", {})
export class AggregateGender {
  @TypeGraphQL.Field(_type => GenderCountAggregate, {
    nullable: true
  })
  _count!: GenderCountAggregate | null;

  @TypeGraphQL.Field(_type => GenderAvgAggregate, {
    nullable: true
  })
  _avg!: GenderAvgAggregate | null;

  @TypeGraphQL.Field(_type => GenderSumAggregate, {
    nullable: true
  })
  _sum!: GenderSumAggregate | null;

  @TypeGraphQL.Field(_type => GenderMinAggregate, {
    nullable: true
  })
  _min!: GenderMinAggregate | null;

  @TypeGraphQL.Field(_type => GenderMaxAggregate, {
    nullable: true
  })
  _max!: GenderMaxAggregate | null;
}
