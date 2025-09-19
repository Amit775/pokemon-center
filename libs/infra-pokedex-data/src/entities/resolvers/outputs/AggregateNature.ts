import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureAvgAggregate } from "../outputs/NatureAvgAggregate";
import { NatureCountAggregate } from "../outputs/NatureCountAggregate";
import { NatureMaxAggregate } from "../outputs/NatureMaxAggregate";
import { NatureMinAggregate } from "../outputs/NatureMinAggregate";
import { NatureSumAggregate } from "../outputs/NatureSumAggregate";

@TypeGraphQL.ObjectType("AggregateNature", {})
export class AggregateNature {
  @TypeGraphQL.Field(_type => NatureCountAggregate, {
    nullable: true
  })
  _count!: NatureCountAggregate | null;

  @TypeGraphQL.Field(_type => NatureAvgAggregate, {
    nullable: true
  })
  _avg!: NatureAvgAggregate | null;

  @TypeGraphQL.Field(_type => NatureSumAggregate, {
    nullable: true
  })
  _sum!: NatureSumAggregate | null;

  @TypeGraphQL.Field(_type => NatureMinAggregate, {
    nullable: true
  })
  _min!: NatureMinAggregate | null;

  @TypeGraphQL.Field(_type => NatureMaxAggregate, {
    nullable: true
  })
  _max!: NatureMaxAggregate | null;
}
