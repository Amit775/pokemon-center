import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsAvgAggregate } from "../outputs/MoveMetaAilmentsAvgAggregate";
import { MoveMetaAilmentsCountAggregate } from "../outputs/MoveMetaAilmentsCountAggregate";
import { MoveMetaAilmentsMaxAggregate } from "../outputs/MoveMetaAilmentsMaxAggregate";
import { MoveMetaAilmentsMinAggregate } from "../outputs/MoveMetaAilmentsMinAggregate";
import { MoveMetaAilmentsSumAggregate } from "../outputs/MoveMetaAilmentsSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveMetaAilments", {})
export class AggregateMoveMetaAilments {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsCountAggregate, {
    nullable: true
  })
  _count!: MoveMetaAilmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsAvgAggregate, {
    nullable: true
  })
  _avg!: MoveMetaAilmentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsSumAggregate, {
    nullable: true
  })
  _sum!: MoveMetaAilmentsSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsMinAggregate, {
    nullable: true
  })
  _min!: MoveMetaAilmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsMaxAggregate, {
    nullable: true
  })
  _max!: MoveMetaAilmentsMaxAggregate | null;
}
