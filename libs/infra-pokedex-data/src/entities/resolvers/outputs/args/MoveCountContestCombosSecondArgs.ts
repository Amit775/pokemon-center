import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboWhereInput } from "../../inputs/ContestComboWhereInput";

@TypeGraphQL.ArgsType()
export class MoveCountContestCombosSecondArgs {
  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  where?: ContestComboWhereInput | undefined;
}
