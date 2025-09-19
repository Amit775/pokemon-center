import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Encounter } from "../../models/Encounter";
import { EncounterConditionValue } from "../../models/EncounterConditionValue";

@TypeGraphQL.ObjectType("CreateManyAndReturnEncounterConditionValueMap", {})
export class CreateManyAndReturnEncounterConditionValueMap {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_condition_value_id!: number;

  @TypeGraphQL.Field(_type => Encounter, {
    nullable: false
  })
  encounter!: Encounter;

  @TypeGraphQL.Field(_type => EncounterConditionValue, {
    nullable: false
  })
  conditionValue!: EncounterConditionValue;
}
