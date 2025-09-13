import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapListRelationFilter } from "../inputs/EncounterConditionValueMapListRelationFilter";
import { EncounterConditionValuesWhereInput } from "../inputs/EncounterConditionValuesWhereInput";
import { EncounterConditionsRelationFilter } from "../inputs/EncounterConditionsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionValuesWhereUniqueInput", {})
export class EncounterConditionValuesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionValuesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionValuesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionValuesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_condition_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_default?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsRelationFilter, {
    nullable: true
  })
  condition?: EncounterConditionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapListRelationFilter, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapListRelationFilter | undefined;
}
