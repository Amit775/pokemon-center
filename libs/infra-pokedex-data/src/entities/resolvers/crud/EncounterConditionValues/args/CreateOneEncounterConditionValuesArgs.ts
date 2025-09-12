import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesCreateInput } from "../../../inputs/EncounterConditionValuesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateInput, {
    nullable: false
  })
  data!: EncounterConditionValuesCreateInput;
}
