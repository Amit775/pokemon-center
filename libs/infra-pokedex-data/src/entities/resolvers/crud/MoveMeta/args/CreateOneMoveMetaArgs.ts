import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCreateInput } from "../../../inputs/MoveMetaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaCreateInput, {
    nullable: false
  })
  data!: MoveMetaCreateInput;
}
