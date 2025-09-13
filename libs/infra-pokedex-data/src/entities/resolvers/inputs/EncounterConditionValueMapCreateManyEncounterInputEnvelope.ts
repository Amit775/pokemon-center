import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateManyEncounterInput } from "../inputs/EncounterConditionValueMapCreateManyEncounterInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateManyEncounterInputEnvelope", {})
export class EncounterConditionValueMapCreateManyEncounterInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateManyEncounterInput], {
    nullable: false
  })
  data!: EncounterConditionValueMapCreateManyEncounterInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
