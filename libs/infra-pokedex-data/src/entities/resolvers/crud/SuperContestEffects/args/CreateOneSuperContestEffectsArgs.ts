import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsCreateInput } from "../../../inputs/SuperContestEffectsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsCreateInput, {
    nullable: false
  })
  data!: SuperContestEffectsCreateInput;
}
