import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionRelationFilter } from "../inputs/EncounterConditionRelationFilter";
import { EncounterConditionValueMapListRelationFilter } from "../inputs/EncounterConditionValueMapListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionValueWhereInput", {})
export class EncounterConditionValueWhereInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionValueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionValueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionValueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => EncounterConditionRelationFilter, {
    nullable: true
  })
  condition?: EncounterConditionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapListRelationFilter, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapListRelationFilter | undefined;
}
