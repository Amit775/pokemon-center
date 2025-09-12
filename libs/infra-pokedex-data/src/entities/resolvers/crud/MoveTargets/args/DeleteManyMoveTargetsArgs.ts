import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsWhereInput } from "../../../inputs/MoveTargetsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  where?: MoveTargetsWhereInput | undefined;
}
