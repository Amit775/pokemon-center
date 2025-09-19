import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetWhereInput } from "../../../inputs/MoveTargetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveTargetArgs {
  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  where?: MoveTargetWhereInput | undefined;
}
