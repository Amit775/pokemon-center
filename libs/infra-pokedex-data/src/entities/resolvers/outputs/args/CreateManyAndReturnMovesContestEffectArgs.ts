import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsWhereInput } from "../../inputs/ContestEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMovesContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  where?: ContestEffectsWhereInput | undefined;
}
