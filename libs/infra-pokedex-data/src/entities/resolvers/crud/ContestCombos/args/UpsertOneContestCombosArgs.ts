import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosCreateInput } from "../../../inputs/ContestCombosCreateInput";
import { ContestCombosUpdateInput } from "../../../inputs/ContestCombosUpdateInput";
import { ContestCombosWhereUniqueInput } from "../../../inputs/ContestCombosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosWhereUniqueInput, {
    nullable: false
  })
  where!: ContestCombosWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestCombosCreateInput, {
    nullable: false
  })
  create!: ContestCombosCreateInput;

  @TypeGraphQL.Field(_type => ContestCombosUpdateInput, {
    nullable: false
  })
  update!: ContestCombosUpdateInput;
}
