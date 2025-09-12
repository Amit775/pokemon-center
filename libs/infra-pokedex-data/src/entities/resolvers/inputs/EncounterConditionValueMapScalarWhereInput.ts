import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("EncounterConditionValueMapScalarWhereInput", {})
export class EncounterConditionValueMapScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereInput], {
    nullable: true
  })
  AND?: EncounterConditionValueMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereInput], {
    nullable: true
  })
  OR?: EncounterConditionValueMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereInput], {
    nullable: true
  })
  NOT?: EncounterConditionValueMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_condition_value_id?: IntFilter | undefined;
}
