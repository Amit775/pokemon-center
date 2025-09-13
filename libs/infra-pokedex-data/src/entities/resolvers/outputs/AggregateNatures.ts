import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesAvgAggregate } from "../outputs/NaturesAvgAggregate";
import { NaturesCountAggregate } from "../outputs/NaturesCountAggregate";
import { NaturesMaxAggregate } from "../outputs/NaturesMaxAggregate";
import { NaturesMinAggregate } from "../outputs/NaturesMinAggregate";
import { NaturesSumAggregate } from "../outputs/NaturesSumAggregate";

@TypeGraphQL.ObjectType("AggregateNatures", {})
export class AggregateNatures {
  @TypeGraphQL.Field(_type => NaturesCountAggregate, {
    nullable: true
  })
  _count!: NaturesCountAggregate | null;

  @TypeGraphQL.Field(_type => NaturesAvgAggregate, {
    nullable: true
  })
  _avg!: NaturesAvgAggregate | null;

  @TypeGraphQL.Field(_type => NaturesSumAggregate, {
    nullable: true
  })
  _sum!: NaturesSumAggregate | null;

  @TypeGraphQL.Field(_type => NaturesMinAggregate, {
    nullable: true
  })
  _min!: NaturesMinAggregate | null;

  @TypeGraphQL.Field(_type => NaturesMaxAggregate, {
    nullable: true
  })
  _max!: NaturesMaxAggregate | null;
}
