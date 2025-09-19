import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetUpdateManyMutationInput } from "../../../inputs/MoveTargetUpdateManyMutationInput";
import { MoveTargetWhereInput } from "../../../inputs/MoveTargetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveTargetArgs {
  @TypeGraphQL.Field(_type => MoveTargetUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveTargetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  where?: MoveTargetWhereInput | undefined;
}
