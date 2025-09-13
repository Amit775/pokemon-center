import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesScalarWhereInput } from "../inputs/EncounterConditionValuesScalarWhereInput";
import { EncounterConditionValuesUpdateManyMutationInput } from "../inputs/EncounterConditionValuesUpdateManyMutationInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput", {})
export class EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesScalarWhereInput, {
    nullable: false
  })
  where!: EncounterConditionValuesScalarWhereInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionValuesUpdateManyMutationInput;
}
