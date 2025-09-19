import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentAvgAggregate } from "../outputs/MoveMetaAilmentAvgAggregate";
import { MoveMetaAilmentCountAggregate } from "../outputs/MoveMetaAilmentCountAggregate";
import { MoveMetaAilmentMaxAggregate } from "../outputs/MoveMetaAilmentMaxAggregate";
import { MoveMetaAilmentMinAggregate } from "../outputs/MoveMetaAilmentMinAggregate";
import { MoveMetaAilmentSumAggregate } from "../outputs/MoveMetaAilmentSumAggregate";

@TypeGraphQL.ObjectType("MoveMetaAilmentGroupBy", {})
export class MoveMetaAilmentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCountAggregate, {
    nullable: true
  })
  _count!: MoveMetaAilmentCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentAvgAggregate, {
    nullable: true
  })
  _avg!: MoveMetaAilmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentSumAggregate, {
    nullable: true
  })
  _sum!: MoveMetaAilmentSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentMinAggregate, {
    nullable: true
  })
  _min!: MoveMetaAilmentMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentMaxAggregate, {
    nullable: true
  })
  _max!: MoveMetaAilmentMaxAggregate | null;
}
