import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboCreateInput } from "../../../inputs/ContestComboCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContestComboArgs {
  @TypeGraphQL.Field(_type => ContestComboCreateInput, {
    nullable: false
  })
  data!: ContestComboCreateInput;
}
