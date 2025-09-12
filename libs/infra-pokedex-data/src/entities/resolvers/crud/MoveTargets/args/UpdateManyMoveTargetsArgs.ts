import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsUpdateManyMutationInput } from "../../../inputs/MoveTargetsUpdateManyMutationInput";
import { MoveTargetsWhereInput } from "../../../inputs/MoveTargetsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveTargetsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  where?: MoveTargetsWhereInput | undefined;
}
