import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapOrderByWithAggregationInput } from "../../../inputs/EncounterConditionValueMapOrderByWithAggregationInput";
import { EncounterConditionValueMapScalarWhereWithAggregatesInput } from "../../../inputs/EncounterConditionValueMapScalarWhereWithAggregatesInput";
import { EncounterConditionValueMapWhereInput } from "../../../inputs/EncounterConditionValueMapWhereInput";
import { EncounterConditionValueMapScalarFieldEnum } from "../../../../enums/EncounterConditionValueMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValueMapOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"encounter_id" | "encounter_condition_value_id">;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterConditionValueMapScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
