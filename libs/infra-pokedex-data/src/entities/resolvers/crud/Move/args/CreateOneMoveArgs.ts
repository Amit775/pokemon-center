import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveCreateInput } from "../../../inputs/MoveCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveArgs {
  @TypeGraphQL.Field(_type => MoveCreateInput, {
    nullable: false
  })
  data!: MoveCreateInput;
}
