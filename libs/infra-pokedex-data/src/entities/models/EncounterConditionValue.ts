import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterCondition } from "../models/EncounterCondition";
import { EncounterConditionValueMap } from "../models/EncounterConditionValueMap";
import { EncounterConditionValueCount } from "../resolvers/outputs/EncounterConditionValueCount";

@TypeGraphQL.ObjectType("EncounterConditionValue", {})
export class EncounterConditionValue {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_condition_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_default!: number;

  condition?: EncounterCondition;

  conditionValueMap?: EncounterConditionValueMap[];

  @TypeGraphQL.Field(_type => EncounterConditionValueCount, {
    nullable: true
  })
  _count?: EncounterConditionValueCount | null;
}
