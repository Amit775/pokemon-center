import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionCreateInput } from "../../../inputs/EncounterConditionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionCreateInput, {
    nullable: false
  })
  data!: EncounterConditionCreateInput;
}
