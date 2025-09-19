import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionOrderByWithAggregationInput } from "../../../inputs/EncounterConditionOrderByWithAggregationInput";
import { EncounterConditionScalarWhereWithAggregatesInput } from "../../../inputs/EncounterConditionScalarWhereWithAggregatesInput";
import { EncounterConditionWhereInput } from "../../../inputs/EncounterConditionWhereInput";
import { EncounterConditionScalarFieldEnum } from "../../../../enums/EncounterConditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  where?: EncounterConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => EncounterConditionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EncounterConditionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
