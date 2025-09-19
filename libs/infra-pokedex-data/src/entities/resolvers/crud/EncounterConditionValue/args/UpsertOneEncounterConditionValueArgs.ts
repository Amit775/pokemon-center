import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueCreateInput } from "../../../inputs/EncounterConditionValueCreateInput";
import { EncounterConditionValueUpdateInput } from "../../../inputs/EncounterConditionValueUpdateInput";
import { EncounterConditionValueWhereUniqueInput } from "../../../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateInput, {
    nullable: false
  })
  create!: EncounterConditionValueCreateInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateInput, {
    nullable: false
  })
  update!: EncounterConditionValueUpdateInput;
}
