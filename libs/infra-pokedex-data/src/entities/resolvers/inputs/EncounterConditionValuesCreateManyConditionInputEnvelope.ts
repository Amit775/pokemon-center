import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateManyConditionInput } from "../inputs/EncounterConditionValuesCreateManyConditionInput";

@TypeGraphQL.InputType("EncounterConditionValuesCreateManyConditionInputEnvelope", {})
export class EncounterConditionValuesCreateManyConditionInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterConditionValuesCreateManyConditionInput], {
    nullable: false
  })
  data!: EncounterConditionValuesCreateManyConditionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
