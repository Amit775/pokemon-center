import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveUpdateManyMutationInput } from "../../../inputs/MoveUpdateManyMutationInput";
import { MoveWhereInput } from "../../../inputs/MoveWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveArgs {
  @TypeGraphQL.Field(_type => MoveUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
