import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesUpdateManyMutationInput } from "../../../inputs/MoveMetaCategoriesUpdateManyMutationInput";
import { MoveMetaCategoriesWhereInput } from "../../../inputs/MoveMetaCategoriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MoveMetaCategoriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoriesWhereInput | undefined;
}
