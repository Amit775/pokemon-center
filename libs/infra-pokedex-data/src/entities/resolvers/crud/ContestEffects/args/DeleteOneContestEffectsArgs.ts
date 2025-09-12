import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsWhereUniqueInput } from "../../../inputs/ContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectsWhereUniqueInput;
}
