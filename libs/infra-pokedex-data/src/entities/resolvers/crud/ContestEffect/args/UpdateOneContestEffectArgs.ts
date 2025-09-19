import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectUpdateInput } from "../../../inputs/ContestEffectUpdateInput";
import { ContestEffectWhereUniqueInput } from "../../../inputs/ContestEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectUpdateInput, {
    nullable: false
  })
  data!: ContestEffectUpdateInput;

  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectWhereUniqueInput;
}
