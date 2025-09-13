import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosWhereInput } from "../../inputs/ContestCombosWhereInput";

@TypeGraphQL.ArgsType()
export class MovesCountContestCombosSecondArgs {
  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  where?: ContestCombosWhereInput | undefined;
}
