import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionCreateInput } from "../../../inputs/EncounterConditionCreateInput";
import { EncounterConditionUpdateInput } from "../../../inputs/EncounterConditionUpdateInput";
import { EncounterConditionWhereUniqueInput } from "../../../inputs/EncounterConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionCreateInput, {
    nullable: false
  })
  create!: EncounterConditionCreateInput;

  @TypeGraphQL.Field(_type => EncounterConditionUpdateInput, {
    nullable: false
  })
  update!: EncounterConditionUpdateInput;
}
