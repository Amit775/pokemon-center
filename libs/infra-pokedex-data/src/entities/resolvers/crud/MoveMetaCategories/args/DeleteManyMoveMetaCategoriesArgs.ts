import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesWhereInput } from "../../../inputs/MoveMetaCategoriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoriesWhereInput | undefined;
}
