import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectUpdateManyMutationInput } from "../../../inputs/ContestEffectUpdateManyMutationInput";
import { ContestEffectWhereInput } from "../../../inputs/ContestEffectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestEffectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  where?: ContestEffectWhereInput | undefined;
}
