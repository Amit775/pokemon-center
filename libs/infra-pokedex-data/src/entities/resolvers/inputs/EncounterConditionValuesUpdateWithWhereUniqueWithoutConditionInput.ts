import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesUpdateWithoutConditionInput } from "../inputs/EncounterConditionValuesUpdateWithoutConditionInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput", {})
export class EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateWithoutConditionInput, {
    nullable: false
  })
  data!: EncounterConditionValuesUpdateWithoutConditionInput;
}
