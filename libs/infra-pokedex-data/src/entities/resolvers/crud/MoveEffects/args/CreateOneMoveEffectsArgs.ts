import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsCreateInput } from "../../../inputs/MoveEffectsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsCreateInput, {
    nullable: false
  })
  data!: MoveEffectsCreateInput;
}
