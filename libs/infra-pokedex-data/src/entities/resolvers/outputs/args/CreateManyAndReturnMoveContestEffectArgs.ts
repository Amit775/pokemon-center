import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectWhereInput } from "../../inputs/ContestEffectWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMoveContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  where?: ContestEffectWhereInput | undefined;
}
