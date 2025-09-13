import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosWhereUniqueInput } from "../../../inputs/SuperContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestCombosWhereUniqueInput;
}
