import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesListRelationFilter } from "../inputs/EncounterConditionValuesListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionsWhereInput", {})
export class EncounterConditionsWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesListRelationFilter, {
    nullable: true
  })
  values?: EncounterConditionValuesListRelationFilter | undefined;
}
