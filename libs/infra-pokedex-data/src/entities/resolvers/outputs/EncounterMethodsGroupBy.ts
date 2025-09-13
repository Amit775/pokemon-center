import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsAvgAggregate } from "../outputs/EncounterMethodsAvgAggregate";
import { EncounterMethodsCountAggregate } from "../outputs/EncounterMethodsCountAggregate";
import { EncounterMethodsMaxAggregate } from "../outputs/EncounterMethodsMaxAggregate";
import { EncounterMethodsMinAggregate } from "../outputs/EncounterMethodsMinAggregate";
import { EncounterMethodsSumAggregate } from "../outputs/EncounterMethodsSumAggregate";

@TypeGraphQL.ObjectType("EncounterMethodsGroupBy", {})
export class EncounterMethodsGroupBy {
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

  @TypeGraphQL.Field(_type => EncounterMethodsCountAggregate, {
    nullable: true
  })
  _count!: EncounterMethodsCountAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodsAvgAggregate, {
    nullable: true
  })
  _avg!: EncounterMethodsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodsSumAggregate, {
    nullable: true
  })
  _sum!: EncounterMethodsSumAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodsMinAggregate, {
    nullable: true
  })
  _min!: EncounterMethodsMinAggregate | null;

  @TypeGraphQL.Field(_type => EncounterMethodsMaxAggregate, {
    nullable: true
  })
  _max!: EncounterMethodsMaxAggregate | null;
}
