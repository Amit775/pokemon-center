import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueListRelationFilter } from "../inputs/EncounterConditionValueListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionWhereInput", {})
export class EncounterConditionWhereInput {
  @TypeGraphQL.Field(_type => [EncounterConditionWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueListRelationFilter, {
    nullable: true
  })
  values?: EncounterConditionValueListRelationFilter | undefined;
}
