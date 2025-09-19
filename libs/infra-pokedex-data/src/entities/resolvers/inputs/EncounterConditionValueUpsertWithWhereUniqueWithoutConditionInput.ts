import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateWithoutConditionInput } from "../inputs/EncounterConditionValueCreateWithoutConditionInput";
import { EncounterConditionValueUpdateWithoutConditionInput } from "../inputs/EncounterConditionValueUpdateWithoutConditionInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueUpsertWithWhereUniqueWithoutConditionInput", {})
export class EncounterConditionValueUpsertWithWhereUniqueWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateWithoutConditionInput, {
    nullable: false
  })
  update!: EncounterConditionValueUpdateWithoutConditionInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateWithoutConditionInput, {
    nullable: false
  })
  create!: EncounterConditionValueCreateWithoutConditionInput;
}
