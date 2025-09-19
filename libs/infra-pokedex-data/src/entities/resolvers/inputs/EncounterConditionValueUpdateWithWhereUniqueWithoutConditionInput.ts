import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueUpdateWithoutConditionInput } from "../inputs/EncounterConditionValueUpdateWithoutConditionInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueUpdateWithWhereUniqueWithoutConditionInput", {})
export class EncounterConditionValueUpdateWithWhereUniqueWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateWithoutConditionInput, {
    nullable: false
  })
  data!: EncounterConditionValueUpdateWithoutConditionInput;
}
