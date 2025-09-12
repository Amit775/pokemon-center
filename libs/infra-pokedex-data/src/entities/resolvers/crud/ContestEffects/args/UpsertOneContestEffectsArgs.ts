import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsCreateInput } from "../../../inputs/ContestEffectsCreateInput";
import { ContestEffectsUpdateInput } from "../../../inputs/ContestEffectsUpdateInput";
import { ContestEffectsWhereUniqueInput } from "../../../inputs/ContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestEffectsCreateInput, {
    nullable: false
  })
  create!: ContestEffectsCreateInput;

  @TypeGraphQL.Field(_type => ContestEffectsUpdateInput, {
    nullable: false
  })
  update!: ContestEffectsUpdateInput;
}
