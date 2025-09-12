import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapCreateWithoutConditionValueInput";
import { EncounterConditionValueMapUpdateWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapUpdateWithoutConditionValueInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput", {})
export class EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateWithoutConditionValueInput, {
    nullable: false
  })
  update!: EncounterConditionValueMapUpdateWithoutConditionValueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateWithoutConditionValueInput, {
    nullable: false
  })
  create!: EncounterConditionValueMapCreateWithoutConditionValueInput;
}
