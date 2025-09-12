import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesWhereInput } from "../../../inputs/MoveMetaStatChangesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  where?: MoveMetaStatChangesWhereInput | undefined;
}
