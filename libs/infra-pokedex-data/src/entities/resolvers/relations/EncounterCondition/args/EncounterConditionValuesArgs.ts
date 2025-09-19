import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueOrderByWithRelationInput } from "../../../inputs/EncounterConditionValueOrderByWithRelationInput";
import { EncounterConditionValueWhereInput } from "../../../inputs/EncounterConditionValueWhereInput";
import { EncounterConditionValueWhereUniqueInput } from "../../../inputs/EncounterConditionValueWhereUniqueInput";
import { EncounterConditionValueScalarFieldEnum } from "../../../../enums/EncounterConditionValueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class EncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionValueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "encounter_condition_id" | "identifier" | "is_default"> | undefined;
}
