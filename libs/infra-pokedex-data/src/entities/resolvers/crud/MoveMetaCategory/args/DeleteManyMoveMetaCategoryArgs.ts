import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryWhereInput } from "../../../inputs/MoveMetaCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoryWhereInput | undefined;
}
