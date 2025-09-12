import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesCreateInput } from "../../../inputs/MoveMetaCategoriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateInput, {
    nullable: false
  })
  data!: MoveMetaCategoriesCreateInput;
}
