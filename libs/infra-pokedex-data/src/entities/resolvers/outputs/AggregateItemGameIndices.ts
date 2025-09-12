import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesAvgAggregate } from "../outputs/ItemGameIndicesAvgAggregate";
import { ItemGameIndicesCountAggregate } from "../outputs/ItemGameIndicesCountAggregate";
import { ItemGameIndicesMaxAggregate } from "../outputs/ItemGameIndicesMaxAggregate";
import { ItemGameIndicesMinAggregate } from "../outputs/ItemGameIndicesMinAggregate";
import { ItemGameIndicesSumAggregate } from "../outputs/ItemGameIndicesSumAggregate";

@TypeGraphQL.ObjectType("AggregateItemGameIndices", {})
export class AggregateItemGameIndices {
  @TypeGraphQL.Field(_type => ItemGameIndicesCountAggregate, {
    nullable: true
  })
  _count!: ItemGameIndicesCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndicesAvgAggregate, {
    nullable: true
  })
  _avg!: ItemGameIndicesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndicesSumAggregate, {
    nullable: true
  })
  _sum!: ItemGameIndicesSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndicesMinAggregate, {
    nullable: true
  })
  _min!: ItemGameIndicesMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemGameIndicesMaxAggregate, {
    nullable: true
  })
  _max!: ItemGameIndicesMaxAggregate | null;
}
