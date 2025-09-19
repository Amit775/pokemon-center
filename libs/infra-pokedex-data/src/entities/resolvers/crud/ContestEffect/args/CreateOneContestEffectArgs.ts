import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectCreateInput } from "../../../inputs/ContestEffectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectCreateInput, {
    nullable: false
  })
  data!: ContestEffectCreateInput;
}
