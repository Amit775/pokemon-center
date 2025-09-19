import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueScalarWhereInput } from "../inputs/EncounterConditionValueScalarWhereInput";
import { EncounterConditionValueUpdateManyMutationInput } from "../inputs/EncounterConditionValueUpdateManyMutationInput";

@TypeGraphQL.InputType("EncounterConditionValueUpdateManyWithWhereWithoutConditionInput", {})
export class EncounterConditionValueUpdateManyWithWhereWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueScalarWhereInput, {
    nullable: false
  })
  where!: EncounterConditionValueScalarWhereInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionValueUpdateManyMutationInput;
}
