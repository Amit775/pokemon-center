import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionInput";
import { EncounterConditionValuesUpdateWithoutConditionInput } from "../inputs/EncounterConditionValuesUpdateWithoutConditionInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput", {})
export class EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateWithoutConditionInput, {
    nullable: false
  })
  update!: EncounterConditionValuesUpdateWithoutConditionInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateWithoutConditionInput, {
    nullable: false
  })
  create!: EncounterConditionValuesCreateWithoutConditionInput;
}
