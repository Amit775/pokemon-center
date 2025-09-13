import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsAvgAggregate } from "../outputs/ItemsAvgAggregate";
import { ItemsCountAggregate } from "../outputs/ItemsCountAggregate";
import { ItemsMaxAggregate } from "../outputs/ItemsMaxAggregate";
import { ItemsMinAggregate } from "../outputs/ItemsMinAggregate";
import { ItemsSumAggregate } from "../outputs/ItemsSumAggregate";

@TypeGraphQL.ObjectType("AggregateItems", {})
export class AggregateItems {
  @TypeGraphQL.Field(_type => ItemsCountAggregate, {
    nullable: true
  })
  _count!: ItemsCountAggregate | null;

  @TypeGraphQL.Field(_type => ItemsAvgAggregate, {
    nullable: true
  })
  _avg!: ItemsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ItemsSumAggregate, {
    nullable: true
  })
  _sum!: ItemsSumAggregate | null;

  @TypeGraphQL.Field(_type => ItemsMinAggregate, {
    nullable: true
  })
  _min!: ItemsMinAggregate | null;

  @TypeGraphQL.Field(_type => ItemsMaxAggregate, {
    nullable: true
  })
  _max!: ItemsMaxAggregate | null;
}
