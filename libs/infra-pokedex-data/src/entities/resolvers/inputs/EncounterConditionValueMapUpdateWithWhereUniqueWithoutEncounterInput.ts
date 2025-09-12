import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapUpdateWithoutEncounterInput } from "../inputs/EncounterConditionValueMapUpdateWithoutEncounterInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput", {})
export class EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateWithoutEncounterInput, {
    nullable: false
  })
  data!: EncounterConditionValueMapUpdateWithoutEncounterInput;
}
