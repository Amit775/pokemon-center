import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EncounterConditionValueScalarWhereInput", {})
export class EncounterConditionValueScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionValueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionValueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionValueScalarWhereInput[] | undefined;

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
