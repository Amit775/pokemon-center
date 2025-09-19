import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassAvgAggregate } from "../outputs/MoveDamageClassAvgAggregate";
import { MoveDamageClassCountAggregate } from "../outputs/MoveDamageClassCountAggregate";
import { MoveDamageClassMaxAggregate } from "../outputs/MoveDamageClassMaxAggregate";
import { MoveDamageClassMinAggregate } from "../outputs/MoveDamageClassMinAggregate";
import { MoveDamageClassSumAggregate } from "../outputs/MoveDamageClassSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveDamageClass", {})
export class AggregateMoveDamageClass {
  @TypeGraphQL.Field(_type => MoveDamageClassCountAggregate, {
    nullable: true
  })
  _count!: MoveDamageClassCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassAvgAggregate, {
    nullable: true
  })
  _avg!: MoveDamageClassAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassSumAggregate, {
    nullable: true
  })
  _sum!: MoveDamageClassSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassMinAggregate, {
    nullable: true
  })
  _min!: MoveDamageClassMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassMaxAggregate, {
    nullable: true
  })
  _max!: MoveDamageClassMaxAggregate | null;
}
