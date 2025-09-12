import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateWithoutEncounterInput";
import { EncounterConditionValueMapUpdateWithoutEncounterInput } from "../inputs/EncounterConditionValueMapUpdateWithoutEncounterInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput", {})
export class EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateWithoutEncounterInput, {
    nullable: false
  })
  update!: EncounterConditionValueMapUpdateWithoutEncounterInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateWithoutEncounterInput, {
    nullable: false
  })
  create!: EncounterConditionValueMapCreateWithoutEncounterInput;
}
