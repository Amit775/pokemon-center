import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosUpdateManyMutationInput } from "../../../inputs/ContestCombosUpdateManyMutationInput";
import { ContestCombosWhereInput } from "../../../inputs/ContestCombosWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestCombosUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  where?: ContestCombosWhereInput | undefined;
}
