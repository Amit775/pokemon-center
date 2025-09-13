import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesAvgAggregate } from "../outputs/TypesAvgAggregate";
import { TypesCountAggregate } from "../outputs/TypesCountAggregate";
import { TypesMaxAggregate } from "../outputs/TypesMaxAggregate";
import { TypesMinAggregate } from "../outputs/TypesMinAggregate";
import { TypesSumAggregate } from "../outputs/TypesSumAggregate";

@TypeGraphQL.ObjectType("TypesGroupBy", {})
export class TypesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id!: number | null;

  @TypeGraphQL.Field(_type => TypesCountAggregate, {
    nullable: true
  })
  _count!: TypesCountAggregate | null;

  @TypeGraphQL.Field(_type => TypesAvgAggregate, {
    nullable: true
  })
  _avg!: TypesAvgAggregate | null;

  @TypeGraphQL.Field(_type => TypesSumAggregate, {
    nullable: true
  })
  _sum!: TypesSumAggregate | null;

  @TypeGraphQL.Field(_type => TypesMinAggregate, {
    nullable: true
  })
  _min!: TypesMinAggregate | null;

  @TypeGraphQL.Field(_type => TypesMaxAggregate, {
    nullable: true
  })
  _max!: TypesMaxAggregate | null;
}
