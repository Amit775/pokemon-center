import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosWhereUniqueInput } from "../../../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;
}
