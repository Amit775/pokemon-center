import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueCreateInput } from "../../../inputs/EncounterConditionValueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueCreateInput, {
    nullable: false
  })
  data!: EncounterConditionValueCreateInput;
}
