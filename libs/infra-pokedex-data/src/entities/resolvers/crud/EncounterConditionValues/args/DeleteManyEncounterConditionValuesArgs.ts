import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesWhereInput } from "../../../inputs/EncounterConditionValuesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValuesWhereInput | undefined;
}
