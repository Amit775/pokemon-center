import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterConditionValue } from "../models/EncounterConditionValue";
import { EncounterConditionCount } from "../resolvers/outputs/EncounterConditionCount";

@TypeGraphQL.ObjectType("EncounterCondition", {})
export class EncounterCondition {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  values?: EncounterConditionValue[];

  @TypeGraphQL.Field(_type => EncounterConditionCount, {
    nullable: true
  })
  _count?: EncounterConditionCount | null;
}
