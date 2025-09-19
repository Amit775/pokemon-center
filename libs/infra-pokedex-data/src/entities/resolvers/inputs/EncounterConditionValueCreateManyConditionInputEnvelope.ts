import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateManyConditionInput } from "../inputs/EncounterConditionValueCreateManyConditionInput";

@TypeGraphQL.InputType("EncounterConditionValueCreateManyConditionInputEnvelope", {})
export class EncounterConditionValueCreateManyConditionInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterConditionValueCreateManyConditionInput], {
    nullable: false
  })
  data!: EncounterConditionValueCreateManyConditionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
