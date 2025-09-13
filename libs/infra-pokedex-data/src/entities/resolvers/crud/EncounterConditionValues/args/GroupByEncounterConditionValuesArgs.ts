import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesOrderByWithAggregationInput } from "../../../inputs/EncounterConditionValuesOrderByWithAggregationInput";
import { EncounterConditionValuesScalarWhereWithAggregatesInput } from "../../../inputs/EncounterConditionValuesScalarWhereWithAggregatesInput";
import { EncounterConditionValuesWhereInput } from "../../../inputs/EncounterConditionValuesWhereInput";
import { EncounterConditionValuesScalarFieldEnum } from "../../../../enums/EncounterConditionValuesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValuesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValuesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "encounter_condition_id" | "identifier" | "is_default">;

  @TypeGraphQL.Field(_type => EncounterConditionValuesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterConditionValuesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
