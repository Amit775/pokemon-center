import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapOrderByWithRelationInput } from "../../../inputs/EncounterConditionValueMapOrderByWithRelationInput";
import { EncounterConditionValueMapWhereInput } from "../../../inputs/EncounterConditionValueMapWhereInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../../../inputs/EncounterConditionValueMapWhereUniqueInput";
import { EncounterConditionValueMapScalarFieldEnum } from "../../../../enums/EncounterConditionValueMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValueMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionValueMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"encounter_id" | "encounter_condition_value_id"> | undefined;
}
