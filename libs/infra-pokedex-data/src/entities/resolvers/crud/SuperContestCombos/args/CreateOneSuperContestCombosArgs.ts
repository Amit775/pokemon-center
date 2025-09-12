import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosCreateInput } from "../../../inputs/SuperContestCombosCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosCreateInput, {
    nullable: false
  })
  data!: SuperContestCombosCreateInput;
}
