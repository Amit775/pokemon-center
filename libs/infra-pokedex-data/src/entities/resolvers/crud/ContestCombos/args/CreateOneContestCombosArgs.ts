import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosCreateInput } from "../../../inputs/ContestCombosCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosCreateInput, {
    nullable: false
  })
  data!: ContestCombosCreateInput;
}
