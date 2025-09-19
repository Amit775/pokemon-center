import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueRelationFilter } from "../inputs/EncounterConditionValueRelationFilter";
import { EncounterRelationFilter } from "../inputs/EncounterRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("EncounterConditionValueMapWhereInput", {})
export class EncounterConditionValueMapWhereInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionValueMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionValueMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionValueMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_condition_value_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterRelationFilter, {
    nullable: true
  })
  encounter?: EncounterRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueRelationFilter, {
    nullable: true
  })
  conditionValue?: EncounterConditionValueRelationFilter | undefined;
}
