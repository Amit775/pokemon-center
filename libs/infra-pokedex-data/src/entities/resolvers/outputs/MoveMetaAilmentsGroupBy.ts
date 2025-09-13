import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsAvgAggregate } from "../outputs/MoveMetaAilmentsAvgAggregate";
import { MoveMetaAilmentsCountAggregate } from "../outputs/MoveMetaAilmentsCountAggregate";
import { MoveMetaAilmentsMaxAggregate } from "../outputs/MoveMetaAilmentsMaxAggregate";
import { MoveMetaAilmentsMinAggregate } from "../outputs/MoveMetaAilmentsMinAggregate";
import { MoveMetaAilmentsSumAggregate } from "../outputs/MoveMetaAilmentsSumAggregate";

@TypeGraphQL.ObjectType("MoveMetaAilmentsGroupBy", {})
export class MoveMetaAilmentsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

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
