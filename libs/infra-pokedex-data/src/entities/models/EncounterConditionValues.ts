import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterConditionValueMap } from "../models/EncounterConditionValueMap";
import { EncounterConditions } from "../models/EncounterConditions";
import { EncounterConditionValuesCount } from "../resolvers/outputs/EncounterConditionValuesCount";

@TypeGraphQL.ObjectType("EncounterConditionValues", {})
export class EncounterConditionValues {
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

  condition?: EncounterConditions;

  conditionValueMap?: EncounterConditionValueMap[];

  @TypeGraphQL.Field(_type => EncounterConditionValuesCount, {
    nullable: true
  })
  _count?: EncounterConditionValuesCount | null;
}
