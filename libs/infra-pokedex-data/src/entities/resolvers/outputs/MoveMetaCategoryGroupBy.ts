import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryAvgAggregate } from "../outputs/MoveMetaCategoryAvgAggregate";
import { MoveMetaCategoryCountAggregate } from "../outputs/MoveMetaCategoryCountAggregate";
import { MoveMetaCategoryMaxAggregate } from "../outputs/MoveMetaCategoryMaxAggregate";
import { MoveMetaCategoryMinAggregate } from "../outputs/MoveMetaCategoryMinAggregate";
import { MoveMetaCategorySumAggregate } from "../outputs/MoveMetaCategorySumAggregate";

@TypeGraphQL.ObjectType("MoveMetaCategoryGroupBy", {})
export class MoveMetaCategoryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCountAggregate, {
    nullable: true
  })
  _count!: MoveMetaCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoryAvgAggregate, {
    nullable: true
  })
  _avg!: MoveMetaCategoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategorySumAggregate, {
    nullable: true
  })
  _sum!: MoveMetaCategorySumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoryMinAggregate, {
    nullable: true
  })
  _min!: MoveMetaCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoryMaxAggregate, {
    nullable: true
  })
  _max!: MoveMetaCategoryMaxAggregate | null;
}
