import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesWhereUniqueInput } from "../../../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;
}
