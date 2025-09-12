import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsCreateInput } from "../../../inputs/ContestEffectsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsCreateInput, {
    nullable: false
  })
  data!: ContestEffectsCreateInput;
}
