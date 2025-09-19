import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetCreateInput } from "../../../inputs/MoveTargetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveTargetArgs {
  @TypeGraphQL.Field(_type => MoveTargetCreateInput, {
    nullable: false
  })
  data!: MoveTargetCreateInput;
}
