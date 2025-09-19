import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesUpdateManyMutationInput } from "../../../inputs/MoveMetaStatChangesUpdateManyMutationInput";
import { MoveMetaStatChangesWhereInput } from "../../../inputs/MoveMetaStatChangesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaStatChangesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  where?: MoveMetaStatChangesWhereInput | undefined;
}
