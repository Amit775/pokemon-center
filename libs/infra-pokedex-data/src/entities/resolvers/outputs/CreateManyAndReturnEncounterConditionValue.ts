import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCondition } from "../../models/EncounterCondition";

@TypeGraphQL.ObjectType("CreateManyAndReturnEncounterConditionValue", {})
export class CreateManyAndReturnEncounterConditionValue {
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

  @TypeGraphQL.Field(_type => EncounterCondition, {
    nullable: false
  })
  condition!: EncounterCondition;
}
