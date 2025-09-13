import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapUpdateWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapUpdateWithoutConditionValueInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput", {})
export class EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateWithoutConditionValueInput, {
    nullable: false
  })
  data!: EncounterConditionValueMapUpdateWithoutConditionValueInput;
}
