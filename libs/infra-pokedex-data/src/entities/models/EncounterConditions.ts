import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterConditionValues } from "../models/EncounterConditionValues";
import { EncounterConditionsCount } from "../resolvers/outputs/EncounterConditionsCount";

@TypeGraphQL.ObjectType("EncounterConditions", {})
export class EncounterConditions {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  values?: EncounterConditionValues[];

  @TypeGraphQL.Field(_type => EncounterConditionsCount, {
    nullable: true
  })
  _count?: EncounterConditionsCount | null;
}
