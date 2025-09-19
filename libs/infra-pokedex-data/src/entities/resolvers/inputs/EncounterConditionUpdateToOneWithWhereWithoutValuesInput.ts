import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionUpdateWithoutValuesInput } from "../inputs/EncounterConditionUpdateWithoutValuesInput";
import { EncounterConditionWhereInput } from "../inputs/EncounterConditionWhereInput";

@TypeGraphQL.InputType("EncounterConditionUpdateToOneWithWhereWithoutValuesInput", {})
export class EncounterConditionUpdateToOneWithWhereWithoutValuesInput {
  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  where?: EncounterConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionUpdateWithoutValuesInput, {
    nullable: false
  })
  data!: EncounterConditionUpdateWithoutValuesInput;
}
