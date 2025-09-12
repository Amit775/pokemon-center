import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsCreateInput } from "../../../inputs/MoveTargetsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsCreateInput, {
    nullable: false
  })
  data!: MoveTargetsCreateInput;
}
