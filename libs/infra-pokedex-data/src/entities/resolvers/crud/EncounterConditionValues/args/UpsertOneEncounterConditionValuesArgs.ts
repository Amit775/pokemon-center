import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesCreateInput } from "../../../inputs/EncounterConditionValuesCreateInput";
import { EncounterConditionValuesUpdateInput } from "../../../inputs/EncounterConditionValuesUpdateInput";
import { EncounterConditionValuesWhereUniqueInput } from "../../../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateInput, {
    nullable: false
  })
  create!: EncounterConditionValuesCreateInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateInput, {
    nullable: false
  })
  update!: EncounterConditionValuesUpdateInput;
}
