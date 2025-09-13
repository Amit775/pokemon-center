import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeEfficacyAvgAggregate } from "../outputs/TypeEfficacyAvgAggregate";
import { TypeEfficacyCountAggregate } from "../outputs/TypeEfficacyCountAggregate";
import { TypeEfficacyMaxAggregate } from "../outputs/TypeEfficacyMaxAggregate";
import { TypeEfficacyMinAggregate } from "../outputs/TypeEfficacyMinAggregate";
import { TypeEfficacySumAggregate } from "../outputs/TypeEfficacySumAggregate";

@TypeGraphQL.ObjectType("TypeEfficacyGroupBy", {})
export class TypeEfficacyGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  target_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  damage_factor!: number;

  @TypeGraphQL.Field(_type => TypeEfficacyCountAggregate, {
    nullable: true
  })
  _count!: TypeEfficacyCountAggregate | null;

  @TypeGraphQL.Field(_type => TypeEfficacyAvgAggregate, {
    nullable: true
  })
  _avg!: TypeEfficacyAvgAggregate | null;

  @TypeGraphQL.Field(_type => TypeEfficacySumAggregate, {
    nullable: true
  })
  _sum!: TypeEfficacySumAggregate | null;

  @TypeGraphQL.Field(_type => TypeEfficacyMinAggregate, {
    nullable: true
  })
  _min!: TypeEfficacyMinAggregate | null;

  @TypeGraphQL.Field(_type => TypeEfficacyMaxAggregate, {
    nullable: true
  })
  _max!: TypeEfficacyMaxAggregate | null;
}
