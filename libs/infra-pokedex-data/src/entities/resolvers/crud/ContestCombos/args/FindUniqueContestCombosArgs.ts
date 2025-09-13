import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosWhereUniqueInput } from "../../../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;
}
