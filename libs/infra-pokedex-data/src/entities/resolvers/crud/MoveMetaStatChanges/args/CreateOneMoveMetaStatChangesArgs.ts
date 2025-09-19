import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesCreateInput } from "../../../inputs/MoveMetaStatChangesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesCreateInput;
}
