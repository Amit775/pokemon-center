import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectCreateInput } from "../../../inputs/ContestEffectCreateInput";
import { ContestEffectUpdateInput } from "../../../inputs/ContestEffectUpdateInput";
import { ContestEffectWhereUniqueInput } from "../../../inputs/ContestEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestEffectCreateInput, {
    nullable: false
  })
  create!: ContestEffectCreateInput;

  @TypeGraphQL.Field(_type => ContestEffectUpdateInput, {
    nullable: false
  })
  update!: ContestEffectUpdateInput;
}
