import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapCreateInput } from "../../../inputs/EncounterConditionValueMapCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateInput, {
    nullable: false
  })
  data!: EncounterConditionValueMapCreateInput;
}
