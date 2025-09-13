import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesUpdateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesUpdateWithoutConditionValueMapInput";
import { EncounterConditionValuesWhereInput } from "../inputs/EncounterConditionValuesWhereInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput", {})
export class EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValuesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  data!: EncounterConditionValuesUpdateWithoutConditionValueMapInput;
}
