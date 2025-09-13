import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsAvgAggregate } from "../outputs/MoveFlagsAvgAggregate";
import { MoveFlagsCountAggregate } from "../outputs/MoveFlagsCountAggregate";
import { MoveFlagsMaxAggregate } from "../outputs/MoveFlagsMaxAggregate";
import { MoveFlagsMinAggregate } from "../outputs/MoveFlagsMinAggregate";
import { MoveFlagsSumAggregate } from "../outputs/MoveFlagsSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveFlags", {})
export class AggregateMoveFlags {
  @TypeGraphQL.Field(_type => MoveFlagsCountAggregate, {
    nullable: true
  })
  _count!: MoveFlagsCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagsAvgAggregate, {
    nullable: true
  })
  _avg!: MoveFlagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagsSumAggregate, {
    nullable: true
  })
  _sum!: MoveFlagsSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagsMinAggregate, {
    nullable: true
  })
  _min!: MoveFlagsMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveFlagsMaxAggregate, {
    nullable: true
  })
  _max!: MoveFlagsMaxAggregate | null;
}
