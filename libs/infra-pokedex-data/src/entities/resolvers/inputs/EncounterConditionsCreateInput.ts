import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateNestedManyWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateNestedManyWithoutConditionInput";

@TypeGraphQL.InputType("EncounterConditionsCreateInput", {})
export class EncounterConditionsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateNestedManyWithoutConditionInput, {
    nullable: true
  })
  values?: EncounterConditionValuesCreateNestedManyWithoutConditionInput | undefined;
}
