import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectWhereUniqueInput } from "../../../inputs/ContestEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContestEffectOrThrowArgs {
  @TypeGraphQL.Field(_type => ContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectWhereUniqueInput;
}
