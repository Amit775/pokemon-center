import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesAvgAggregate } from "../outputs/MoveDamageClassesAvgAggregate";
import { MoveDamageClassesCountAggregate } from "../outputs/MoveDamageClassesCountAggregate";
import { MoveDamageClassesMaxAggregate } from "../outputs/MoveDamageClassesMaxAggregate";
import { MoveDamageClassesMinAggregate } from "../outputs/MoveDamageClassesMinAggregate";
import { MoveDamageClassesSumAggregate } from "../outputs/MoveDamageClassesSumAggregate";

@TypeGraphQL.ObjectType("MoveDamageClassesGroupBy", {})
export class MoveDamageClassesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => MoveDamageClassesCountAggregate, {
    nullable: true
  })
  _count!: MoveDamageClassesCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassesAvgAggregate, {
    nullable: true
  })
  _avg!: MoveDamageClassesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassesSumAggregate, {
    nullable: true
  })
  _sum!: MoveDamageClassesSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassesMinAggregate, {
    nullable: true
  })
  _min!: MoveDamageClassesMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveDamageClassesMaxAggregate, {
    nullable: true
  })
  _max!: MoveDamageClassesMaxAggregate | null;
}
