import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionCreateWithoutValuesInput } from "../inputs/EncounterConditionCreateWithoutValuesInput";
import { EncounterConditionUpdateWithoutValuesInput } from "../inputs/EncounterConditionUpdateWithoutValuesInput";
import { EncounterConditionWhereInput } from "../inputs/EncounterConditionWhereInput";

@TypeGraphQL.InputType("EncounterConditionUpsertWithoutValuesInput", {})
export class EncounterConditionUpsertWithoutValuesInput {
  @TypeGraphQL.Field(_type => EncounterConditionUpdateWithoutValuesInput, {
    nullable: false
  })
  update!: EncounterConditionUpdateWithoutValuesInput;

  @TypeGraphQL.Field(_type => EncounterConditionCreateWithoutValuesInput, {
    nullable: false
  })
  create!: EncounterConditionCreateWithoutValuesInput;

  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  where?: EncounterConditionWhereInput | undefined;
}
