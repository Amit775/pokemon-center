import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapScalarWhereInput } from "../inputs/EncounterConditionValueMapScalarWhereInput";
import { EncounterConditionValueMapUpdateManyMutationInput } from "../inputs/EncounterConditionValueMapUpdateManyMutationInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput", {})
export class EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapScalarWhereInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapScalarWhereInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterConditionValueMapUpdateManyMutationInput;
}
