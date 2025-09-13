import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesListRelationFilter } from "../inputs/EncounterConditionValuesListRelationFilter";
import { EncounterConditionsWhereInput } from "../inputs/EncounterConditionsWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionsWhereUniqueInput", {})
export class EncounterConditionsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionsWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesListRelationFilter, {
    nullable: true
  })
  values?: EncounterConditionValuesListRelationFilter | undefined;
}
