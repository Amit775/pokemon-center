import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionValuesScalarWhereInput", {})
export class EncounterConditionValuesScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionValuesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionValuesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionValuesScalarWhereInput[] | undefined;

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
}
