import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosUpdateInput } from "../../../inputs/ContestCombosUpdateInput";
import { ContestCombosWhereUniqueInput } from "../../../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosUpdateInput, {
    nullable: false
  })
  data!: ContestCombosUpdateInput;

  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;
}
