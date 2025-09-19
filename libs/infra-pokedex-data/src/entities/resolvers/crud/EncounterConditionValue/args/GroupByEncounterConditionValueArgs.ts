import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueOrderByWithAggregationInput } from "../../../inputs/EncounterConditionValueOrderByWithAggregationInput";
import { EncounterConditionValueScalarWhereWithAggregatesInput } from "../../../inputs/EncounterConditionValueScalarWhereWithAggregatesInput";
import { EncounterConditionValueWhereInput } from "../../../inputs/EncounterConditionValueWhereInput";
import { EncounterConditionValueScalarFieldEnum } from "../../../../enums/EncounterConditionValueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "encounter_condition_id" | "identifier" | "is_default">;

  @TypeGraphQL.Field(_type => EncounterConditionValueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterConditionValueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
