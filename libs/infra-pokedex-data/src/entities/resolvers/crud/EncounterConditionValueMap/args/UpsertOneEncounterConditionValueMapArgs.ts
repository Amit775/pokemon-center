import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapCreateInput } from "../../../inputs/EncounterConditionValueMapCreateInput";
import { EncounterConditionValueMapUpdateInput } from "../../../inputs/EncounterConditionValueMapUpdateInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../../../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateInput, {
    nullable: false
  })
  create!: EncounterConditionValueMapCreateInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateInput, {
    nullable: false
  })
  update!: EncounterConditionValueMapUpdateInput;
}
