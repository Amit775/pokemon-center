import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionValueMapInput";
import { EncounterConditionValuesUpdateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesUpdateWithoutConditionValueMapInput";
import { EncounterConditionValuesWhereInput } from "../inputs/EncounterConditionValuesWhereInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpsertWithoutConditionValueMapInput", {})
export class EncounterConditionValuesUpsertWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateWithoutConditionValueMapInput, {
    nullable: false
  })
  update!: EncounterConditionValuesUpdateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncounterConditionValuesCreateWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValuesWhereInput | undefined;
}
