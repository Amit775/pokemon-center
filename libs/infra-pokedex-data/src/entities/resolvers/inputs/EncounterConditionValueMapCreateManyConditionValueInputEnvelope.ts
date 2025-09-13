import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateManyConditionValueInput } from "../inputs/EncounterConditionValueMapCreateManyConditionValueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateManyConditionValueInputEnvelope", {})
export class EncounterConditionValueMapCreateManyConditionValueInputEnvelope {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateManyConditionValueInput], {
    nullable: false
  })
  data!: EncounterConditionValueMapCreateManyConditionValueInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
