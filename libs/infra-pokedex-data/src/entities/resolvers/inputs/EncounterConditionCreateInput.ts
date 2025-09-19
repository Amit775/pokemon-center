import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateNestedManyWithoutConditionInput } from "../inputs/EncounterConditionValueCreateNestedManyWithoutConditionInput";

@TypeGraphQL.InputType("EncounterConditionCreateInput", {})
export class EncounterConditionCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateNestedManyWithoutConditionInput, {
    nullable: true
  })
  values?: EncounterConditionValueCreateNestedManyWithoutConditionInput | undefined;
}
