import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeAvgAggregate } from "../outputs/TypeAvgAggregate";
import { TypeCountAggregate } from "../outputs/TypeCountAggregate";
import { TypeMaxAggregate } from "../outputs/TypeMaxAggregate";
import { TypeMinAggregate } from "../outputs/TypeMinAggregate";
import { TypeSumAggregate } from "../outputs/TypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateType", {})
export class AggregateType {
  @TypeGraphQL.Field(_type => TypeCountAggregate, {
    nullable: true
  })
  _count!: TypeCountAggregate | null;

  @TypeGraphQL.Field(_type => TypeAvgAggregate, {
    nullable: true
  })
  _avg!: TypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => TypeSumAggregate, {
    nullable: true
  })
  _sum!: TypeSumAggregate | null;

  @TypeGraphQL.Field(_type => TypeMinAggregate, {
    nullable: true
  })
  _min!: TypeMinAggregate | null;

  @TypeGraphQL.Field(_type => TypeMaxAggregate, {
    nullable: true
  })
  _max!: TypeMaxAggregate | null;
}
