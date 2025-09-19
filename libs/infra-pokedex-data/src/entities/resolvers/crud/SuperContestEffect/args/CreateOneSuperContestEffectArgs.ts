import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectCreateInput } from "../../../inputs/SuperContestEffectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectCreateInput, {
    nullable: false
  })
  data!: SuperContestEffectCreateInput;
}
