import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterConditionValues } from "../models/EncounterConditionValues";
import { Encounters } from "../models/Encounters";

@TypeGraphQL.ObjectType("EncounterConditionValueMap", {})
export class EncounterConditionValueMap {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_condition_value_id!: number;

  encounter?: Encounters;

  conditionValue?: EncounterConditionValues;
}
