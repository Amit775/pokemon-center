import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeGameIndicesAvgAggregate } from "../outputs/TypeGameIndicesAvgAggregate";
import { TypeGameIndicesCountAggregate } from "../outputs/TypeGameIndicesCountAggregate";
import { TypeGameIndicesMaxAggregate } from "../outputs/TypeGameIndicesMaxAggregate";
import { TypeGameIndicesMinAggregate } from "../outputs/TypeGameIndicesMinAggregate";
import { TypeGameIndicesSumAggregate } from "../outputs/TypeGameIndicesSumAggregate";

@TypeGraphQL.ObjectType("AggregateTypeGameIndices", {})
export class AggregateTypeGameIndices {
  @TypeGraphQL.Field(_type => TypeGameIndicesCountAggregate, {
    nullable: true
  })
  _count!: TypeGameIndicesCountAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndicesAvgAggregate, {
    nullable: true
  })
  _avg!: TypeGameIndicesAvgAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndicesSumAggregate, {
    nullable: true
  })
  _sum!: TypeGameIndicesSumAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndicesMinAggregate, {
    nullable: true
  })
  _min!: TypeGameIndicesMinAggregate | null;

  @TypeGraphQL.Field(_type => TypeGameIndicesMaxAggregate, {
    nullable: true
  })
  _max!: TypeGameIndicesMaxAggregate | null;
}
