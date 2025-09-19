import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodAvgAggregate } from "../outputs/EncounterMethodAvgAggregate";
import { EncounterMethodCountAggregate } from "../outputs/EncounterMethodCountAggregate";
import { EncounterMethodMaxAggregate } from "../outputs/EncounterMethodMaxAggregate";
import { EncounterMethodMinAggregate } from "../outputs/EncounterMethodMinAggregate";
import { EncounterMethodSumAggregate } from "../outputs/EncounterMethodSumAggregate";

@TypeGraphQL.ObjectType("EncounterMethodGroupBy", {})
export class EncounterMethodGroupBy {
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
  order!: number;

  @TypeGraphQL.Field(_type => EncounterMethodCountAggregate, {
    nullable: true
  })
  _count!: EncounterMethodCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterMethodAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodSumAggregate, {
    nullable: true
  })
  _sum!: EncounterMethodSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodMinAggregate, {
    nullable: true
  })
  _min!: EncounterMethodMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodMaxAggregate, {
    nullable: true
  })
  _max!: EncounterMethodMaxAggregate | null;
}
