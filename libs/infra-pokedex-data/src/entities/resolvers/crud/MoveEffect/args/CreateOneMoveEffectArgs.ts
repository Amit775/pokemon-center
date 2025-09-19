import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectCreateInput } from "../../../inputs/MoveEffectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectCreateInput, {
    nullable: false
  })
  data!: MoveEffectCreateInput;
}
