import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndexAvgAggregate } from "../outputs/TypeGameIndexAvgAggregate";
import { TypeGameIndexCountAggregate } from "../outputs/TypeGameIndexCountAggregate";
import { TypeGameIndexMaxAggregate } from "../outputs/TypeGameIndexMaxAggregate";
import { TypeGameIndexMinAggregate } from "../outputs/TypeGameIndexMinAggregate";
import { TypeGameIndexSumAggregate } from "../outputs/TypeGameIndexSumAggregate";

@TypeGraphQL.ObjectType("AggregateTypeGameIndex", {})
export class AggregateTypeGameIndex {
  @TypeGraphQL.Field(_type => TypeGameIndexCountAggregate, {
    nullable: true
  })
  _count!: TypeGameIndexCountAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndexAvgAggregate, {
    nullable: true
  })
  _avg!: TypeGameIndexAvgAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndexSumAggregate, {
    nullable: true
  })
  _sum!: TypeGameIndexSumAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndexMinAggregate, {
    nullable: true
  })
  _min!: TypeGameIndexMinAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndexMaxAggregate, {
    nullable: true
  })
  _max!: TypeGameIndexMaxAggregate | null;
}
