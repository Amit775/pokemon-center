import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboCreateInput } from "../../../inputs/SuperContestComboCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSuperContestComboArgs {
  @TypeGraphQL.Field(_type => SuperContestComboCreateInput, {
    nullable: false
  })
  data!: SuperContestComboCreateInput;
}
