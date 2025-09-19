import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueListRelationFilter } from "../inputs/EncounterConditionValueListRelationFilter";
import { EncounterConditionWhereInput } from "../inputs/EncounterConditionWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionWhereUniqueInput", {})
export class EncounterConditionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueListRelationFilter, {
    nullable: true
  })
  values?: EncounterConditionValueListRelationFilter | undefined;
}
